import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp, Clock, Edit2, Save, X, Download, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clients, Campaign, Script } from "@/data/clients";
import { jsPDF } from "jspdf";

export default function Home() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [expandedCampaign, setExpandedCampaign] = useState<string | null>(null);
  const [editingCampaign, setEditingCampaign] = useState<string | null>(null);
  const [editedCampaigns, setEditedCampaigns] = useState<Record<string, Campaign>>({});
  
  // Modal de roteiro individual
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [selectedCampaignForScript, setSelectedCampaignForScript] = useState<Campaign | null>(null);
  const [editingScript, setEditingScript] = useState(false);
  const [editedScript, setEditedScript] = useState<Script | null>(null);

  const currentClient = clients.find((c) => c.id === selectedClient);

  const handleEditCampaign = (campaign: Campaign) => {
    setEditingCampaign(campaign.id);
    setEditedCampaigns({
      ...editedCampaigns,
      [campaign.id]: { ...campaign }
    });
  };

  const handleSaveCampaign = (campaignId: string) => {
    setEditingCampaign(null);
    console.log("Saved campaign:", editedCampaigns[campaignId]);
  };

  const handleUpdateCampaign = (campaignId: string, field: string, value: any) => {
    setEditedCampaigns({
      ...editedCampaigns,
      [campaignId]: {
        ...editedCampaigns[campaignId],
        [field]: value
      }
    });
  };

  // Abrir modal de roteiro individual
  const openScriptModal = (script: Script, campaign: Campaign) => {
    setSelectedScript(script);
    setSelectedCampaignForScript(campaign);
    setEditedScript({ ...script });
    setEditingScript(false);
  };

  // Fechar modal de roteiro
  const closeScriptModal = () => {
    setSelectedScript(null);
    setSelectedCampaignForScript(null);
    setEditingScript(false);
    setEditedScript(null);
  };

  // Navegar entre roteiros
  const navigateScript = (direction: 'prev' | 'next') => {
    if (!selectedCampaignForScript || !selectedScript) return;
    
    const scripts = selectedCampaignForScript.scripts;
    const currentIndex = scripts.findIndex(s => s.id === selectedScript.id);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : scripts.length - 1;
    } else {
      newIndex = currentIndex < scripts.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedScript(scripts[newIndex]);
    setEditedScript({ ...scripts[newIndex] });
    setEditingScript(false);
  };

  // Exportar roteiro para PDF
  const exportScriptToPDF = () => {
    if (!selectedScript || !selectedCampaignForScript || !currentClient) return;

    try {
      const doc = new jsPDF();
      const scriptToExport = editingScript && editedScript ? editedScript : selectedScript;
      
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const maxWidth = pageWidth - 2 * margin;
      let yPosition = margin;

      // Título do cliente
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(currentClient.name, margin, yPosition);
      yPosition += 8;

      // Título da campanha
      doc.setFontSize(10);
      doc.text(selectedCampaignForScript.title, margin, yPosition);
      yPosition += 15;

      // Título do roteiro
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(200, 50, 50);
      const titleLines = doc.splitTextToSize(scriptToExport.title.toUpperCase(), maxWidth);
      doc.text(titleLines, margin, yPosition);
      yPosition += titleLines.length * 8 + 10;

      // Conteúdo do roteiro
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      
      const lines = scriptToExport.content.split('\n');
      
      for (const line of lines) {
        // Detectar cabeçalhos de cena
        if (line.startsWith('[CENA') || line.startsWith('Formato:') || line.startsWith('Apresentador:') || line.startsWith('Objetivo:')) {
          doc.setFont("helvetica", "bold");
        } else if (line.startsWith('APRESENTADOR') || line.startsWith('NARRADOR')) {
          doc.setFont("helvetica", "bold");
        } else {
          doc.setFont("helvetica", "normal");
        }

        const wrappedLines = doc.splitTextToSize(line || " ", maxWidth);
        
        for (const wrappedLine of wrappedLines) {
          if (yPosition > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
          }
          
          doc.text(wrappedLine, margin, yPosition);
          yPosition += 6;
        }
        
        if (line === "") {
          yPosition += 3;
        }
      }

      // Rodapé
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(150, 150, 150);
        doc.text(`Página ${i} de ${totalPages} - Planner 2026`, pageWidth / 2, pageHeight - 10, { align: "center" });
        doc.setTextColor(0, 0, 0);
      }

      const filename = `${currentClient.name}_${scriptToExport.title}`.replace(/[^a-zA-Z0-9_-]/g, "_") + ".pdf";
      doc.save(filename);
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
      alert("Erro ao exportar PDF. Tente novamente.");
    }
  };

  const calculateSendDate = (campaign: Campaign) => {
    const campaignDate = new Date(campaign.date + "T12:00:00");
    const sendDate = new Date(campaignDate);
    sendDate.setDate(sendDate.getDate() - campaign.sendBefore);
    return sendDate.toLocaleDateString("pt-BR");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  };

  // Filtrar campanhas futuras (a partir de hoje)
  const filterFutureCampaigns = (campaigns: Campaign[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return campaigns.filter(c => {
      const campaignDate = new Date(c.date + "T12:00:00");
      return campaignDate >= today;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Planner 2026</h1>
              <p className="text-muted-foreground mt-1">Hub de Planejamento para Clientes</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedClient ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Selecione um Cliente</h2>
              <p className="text-muted-foreground">Acesse o planner de campanhas e sazonalidades para 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client.id)}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300 p-6 text-left hover:border-accent"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{client.segment}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{client.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-accent">
                        {filterFutureCampaigns(client.campaigns).length} campanhas
                      </span>
                      <ChevronDown className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <button
                  onClick={() => {
                    setSelectedClient(null);
                    setExpandedCampaign(null);
                    setEditingCampaign(null);
                  }}
                  className="text-accent hover:text-accent/80 transition-colors mb-2 flex items-center gap-2"
                >
                  <ChevronUp className="w-4 h-4" />
                  Voltar
                </button>
                <h2 className="text-3xl font-bold text-white">{currentClient?.name}</h2>
                <p className="text-muted-foreground mt-1">{currentClient?.description}</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white">Calendário de Campanhas 2026</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {filterFutureCampaigns(currentClient?.campaigns || []).map((campaign) => {
                  const isExpanded = expandedCampaign === campaign.id;
                  const isEditing = editingCampaign === campaign.id;
                  const editedCampaign = editedCampaigns[campaign.id] || campaign;
                  const sendDate = calculateSendDate(campaign);

                  return (
                    <div
                      key={campaign.id}
                      className="border border-border rounded-lg bg-card/50 overflow-hidden hover:border-accent/50 transition-colors"
                    >
                      <button
                        onClick={() => setExpandedCampaign(isExpanded ? null : campaign.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-card/80 transition-colors"
                      >
                        <div className="text-left flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 rounded-full bg-accent" />
                            <h4 className="text-lg font-semibold text-white">{campaign.title}</h4>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{formatDate(campaign.date)}</span>
                            <div className="flex items-center gap-1 text-accent">
                              <Clock className="w-3 h-3" />
                              <span>Enviar em: {sendDate}</span>
                            </div>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-accent" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-accent" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="border-t border-border p-4 bg-card/30">
                          {isEditing ? (
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                  Título da Campanha
                                </label>
                                <input
                                  type="text"
                                  value={editedCampaign.title}
                                  onChange={(e) =>
                                    handleUpdateCampaign(campaign.id, "title", e.target.value)
                                  }
                                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                  Descrição
                                </label>
                                <textarea
                                  value={editedCampaign.description}
                                  onChange={(e) =>
                                    handleUpdateCampaign(campaign.id, "description", e.target.value)
                                  }
                                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                  rows={2}
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                  Ofertas (uma por linha)
                                </label>
                                <textarea
                                  value={editedCampaign.offers.join("\n")}
                                  onChange={(e) =>
                                    handleUpdateCampaign(
                                      campaign.id,
                                      "offers",
                                      e.target.value.split("\n").filter((o) => o.trim())
                                    )
                                  }
                                  className="w-full bg-input border border-border rounded-lg px-3 py-2 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                  rows={3}
                                />
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  onClick={() => handleSaveCampaign(campaign.id)}
                                  className="flex-1 bg-accent hover:bg-accent/90 text-white"
                                >
                                  <Save className="w-4 h-4 mr-2" />
                                  Salvar
                                </Button>
                                <Button
                                  onClick={() => setEditingCampaign(null)}
                                  variant="outline"
                                  className="flex-1"
                                >
                                  <X className="w-4 h-4 mr-2" />
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Descrição</p>
                                <p className="text-white">{campaign.description}</p>
                              </div>

                              <div>
                                <p className="text-sm text-muted-foreground mb-2">Ofertas Sugeridas</p>
                                <ul className="space-y-2">
                                  {campaign.offers.map((offer, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-sm text-white bg-background/50 rounded p-2"
                                    >
                                      <span className="text-accent font-bold mt-0.5">•</span>
                                      <span>{offer}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p className="text-sm text-muted-foreground mb-3">Roteiros de Conteúdo</p>
                                <div className="space-y-3">
                                  {campaign.scripts.map((script) => (
                                    <button
                                      key={script.id}
                                      onClick={() => openScriptModal(script, campaign)}
                                      className="w-full text-left bg-background/50 rounded-lg p-3 border border-border/50 hover:border-accent/50 hover:bg-background/70 transition-all cursor-pointer"
                                    >
                                      <div className="flex items-center justify-between">
                                        <h5 className="font-semibold text-white text-sm mb-2">
                                          {script.title}
                                        </h5>
                                        <FileText className="w-4 h-4 text-accent" />
                                      </div>
                                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                        {script.content.substring(0, 150)}...
                                      </p>
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-4 border-t border-border">
                                <Button
                                  onClick={() => handleEditCampaign(campaign)}
                                  className="w-full bg-accent hover:bg-accent/90 text-white"
                                >
                                  <Edit2 className="w-4 h-4 mr-2" />
                                  Editar Campanha
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Roteiro Individual */}
      {selectedScript && selectedCampaignForScript && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header do Modal */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-card/90">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedCampaignForScript.title}</h3>
                <p className="text-sm text-muted-foreground">{currentClient?.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={exportScriptToPDF}
                  className="bg-accent hover:bg-accent/90 text-white"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar PDF
                </Button>
                <Button
                  onClick={() => {
                    if (editingScript) {
                      setEditingScript(false);
                    } else {
                      setEditingScript(true);
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  {editingScript ? "Cancelar" : "Editar"}
                </Button>
                <button
                  onClick={closeScriptModal}
                  className="p-2 hover:bg-background/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Navegação */}
            <div className="px-4 py-2 border-b border-border flex items-center justify-between bg-background/30">
              <button
                onClick={() => navigateScript('prev')}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              <span className="text-sm text-muted-foreground">
                Roteiro {selectedCampaignForScript.scripts.findIndex(s => s.id === selectedScript.id) + 1} de {selectedCampaignForScript.scripts.length}
              </span>
              <button
                onClick={() => navigateScript('next')}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Conteúdo do Roteiro */}
            <div className="flex-1 overflow-y-auto p-6">
              {editingScript && editedScript ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Título</label>
                    <input
                      type="text"
                      value={editedScript.title}
                      onChange={(e) => setEditedScript({ ...editedScript, title: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Conteúdo</label>
                    <textarea
                      value={editedScript.content}
                      onChange={(e) => setEditedScript({ ...editedScript, content: e.target.value })}
                      className="w-full bg-input border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none font-mono text-sm"
                      rows={20}
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedScript(editedScript);
                      setEditingScript(false);
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-accent mb-6">{selectedScript.title.toUpperCase()}</h2>
                  <div className="prose prose-invert max-w-none">
                    {selectedScript.content.split('\n').map((line, idx) => {
                      if (line.startsWith('[CENA')) {
                        return <h3 key={idx} className="text-lg font-bold text-white mt-6 mb-2">{line}</h3>;
                      } else if (line.startsWith('Formato:') || line.startsWith('Apresentador:') || line.startsWith('Objetivo:')) {
                        return <p key={idx} className="text-sm text-muted-foreground mb-1">{line}</p>;
                      } else if (line.startsWith('APRESENTADOR') || line.startsWith('NARRADOR')) {
                        return <p key={idx} className="font-bold text-white mt-4 mb-1">{line}</p>;
                      } else if (line.trim() === '') {
                        return <br key={idx} />;
                      } else {
                        return <p key={idx} className="text-white/90 mb-2 leading-relaxed">{line}</p>;
                      }
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer com lista de roteiros */}
            <div className="p-4 border-t border-border bg-background/30">
              <p className="text-xs text-muted-foreground mb-2">Todos os roteiros desta campanha:</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedCampaignForScript.scripts.map((script) => (
                  <button
                    key={script.id}
                    onClick={() => {
                      setSelectedScript(script);
                      setEditedScript({ ...script });
                      setEditingScript(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      script.id === selectedScript.id
                        ? "bg-accent text-white"
                        : "bg-background/50 text-muted-foreground hover:bg-background hover:text-white"
                    }`}
                  >
                    {script.title.length > 25 ? script.title.substring(0, 25) + "..." : script.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Planner 2026 • Hub de Planejamento para Clientes</p>
        </div>
      </footer>
    </div>
  );
}
