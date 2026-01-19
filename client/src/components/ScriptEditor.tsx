import { useState } from "react";
import { X, Edit2, Save, Download } from "lucide-react";

interface Script {
  id: string;
  title: string;
  content: string;
}

interface ScriptEditorProps {
  scripts: Script[];
  campaignTitle: string;
  clientName: string;
  onClose: () => void;
  onSave: (scripts: Script[]) => void;
}

export function ScriptEditor({
  scripts,
  campaignTitle,
  clientName,
  onClose,
  onSave,
}: ScriptEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedScripts, setEditedScripts] = useState<Script[]>(scripts);

  const handleSave = () => {
    onSave(editedScripts);
    setIsEditing(false);
  };

  const handleExportPDF = async () => {
    let markdown = \`# \${clientName}\\n\\n## \${campaignTitle}\\n\\n\`;
    
    editedScripts.forEach((script) => {
      markdown += \`### \${script.title}\\n\\n\${script.content}\\n\\n\`;
    });

    try {
      const response = await fetch("/api/export-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdown,
          filename: \`\${clientName}_\${campaignTitle}_Roteiros\`.replace(/[^a-zA-Z0-9_-]/g, "_"),
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = \`\${clientName}_\${campaignTitle}_Roteiros.pdf\`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert("Erro ao exportar PDF");
      }
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
      alert("Erro ao exportar PDF");
    }
  };

  const updateScript = (index: number, field: "title" | "content", value: string) => {
    const updated = [...editedScripts];
    updated[index] = { ...updated[index], [field]: value };
    setEditedScripts(updated);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-white">{campaignTitle}</h2>
            <p className="text-sm text-muted-foreground">{clientName}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportPDF}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Baixar PDF
            </button>
            {isEditing ? (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Salvar
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Editar
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {editedScripts.map((script, index) => (
            <div key={script.id} className="space-y-3">
              {isEditing ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Título do Roteiro
                    </label>
                    <input
                      type="text"
                      value={script.title}
                      onChange={(e) => updateScript(index, "title", e.target.value)}
                      className="w-full mt-1 px-4 py-2 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Conteúdo do Roteiro
                    </label>
                    <textarea
                      value={script.content}
                      onChange={(e) => updateScript(index, "content", e.target.value)}
                      rows={4}
                      className="w-full mt-1 px-4 py-2 bg-background border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{script.content}</p>
                </>
              )}
              {index < editedScripts.length - 1 && (
                <div className="border-t border-border mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
