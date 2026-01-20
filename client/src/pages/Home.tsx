import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp, Clock, Edit2, Save, X, FileText, Download, ArrowLeft, ArrowRight } from "lucide-react";
import { jsPDF } from "jspdf";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { clients, Campaign, Script } from "@/data/clients";

/**
 * Design Philosophy: Dark Mode Premium Planner
 * - Dark background (oklch(0.12 0.01 0)) with bright white text
 * - Red accents (oklch(0.65 0.25 12)) for emphasis and CTAs
 * - Clean, professional layout with clear hierarchy
 * - Linktree-style hub for client access
 * - Interactive calendar with editable campaigns
 */

export default function Home() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [expandedCampaign, setExpandedCampaign] = useState<string | null>(null);
  const [editingCampaign, setEditingCampaign] = useState<string | null>(null);
  const [editedCampaigns, setEditedCampaigns] = useState<Record<string, Campaign>>({});
  
  // Estado para o modal de roteiro INDIVIDUAL
  const [scriptModalOpen, setScriptModalOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [allScripts, setAllScripts] = useState<Script[]>([]);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0);
  const [selectedCampaignTitle, setSelectedCampaignTitle] = useState("");
  const [isEditingScript, setIsEditingScript] = useState(false);
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
    // In a real app, this would save to a database
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

  // Abrir modal de roteiro INDIVIDUAL
  const openScriptModal = (script: Script, scripts: Script[], campaignTitle: string) => {
    const index = scripts.findIndex(s => s.id === script.id);
    setSelectedScript(script);
    setEditedScript({ ...script });
    setAllScripts(scripts);
    setCurrentScriptIndex(index >= 0 ? index : 0);
    setSelectedCampaignTitle(campaignTitle);
    setScriptModalOpen(true);
    setIsEditingScript(false);
  };

  // Navegar entre roteiros
  const navigateScript = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? Math.max(0, currentScriptIndex - 1)
      : Math.min(allScripts.length - 1, currentScriptIndex + 1);
    
    setCurrentScriptIndex(newIndex);
    setSelectedScript(allScripts[newIndex]);
    setEditedScript({ ...allScripts[newIndex] });
    setIsEditingScript(false);
  };

  // Fechar modal de roteiro
  const closeScriptModal = () => {
    setScriptModalOpen(false);
    setSelectedScript(null);
    setEditedScript(null);
    setAllScripts([]);
    setSelectedCampaignTitle("");
    setIsEditingScript(false);
  };

  // Atualizar roteiro em edição
  const updateScript = (field: "title" | "content", value: string) => {
    if (editedScript) {
      setEditedScript({ ...editedScript, [field]: value });
    }
  };

  // Salvar roteiro editado
  const saveScript = () => {
    if (editedScript) {
      setSelectedScript({ ...editedScript });
      // Atualizar no array também
      const updatedScripts = [...allScripts];
      updatedScripts[currentScriptIndex] = { ...editedScript };
      setAllScripts(updatedScripts);
      setIsEditingScript(false);
      console.log("Roteiro salvo:", editedScript);
    }
  };

  // Exportar roteiro para PDF (client-side com jsPDF)
  const exportScriptToPDF = () => {
    const scriptToExport = isEditingScript ? editedScript : selectedScript;
    if (!scriptToExport) return;

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const maxWidth = pageWidth - margin * 2;
      let yPosition = margin;

      // Título do cliente
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text(currentClient?.name || "Cliente", margin, yPosition);
      yPosition += 10;

      // Título da campanha
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text(selectedCampaignTitle, margin, yPosition);
      yPosition += 15;

      // Linha separadora
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;

      // Título do roteiro
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      const titleLines = doc.splitTextToSize(scriptToExport.title, maxWidth);
      doc.text(titleLines, margin, yPosition);
      yPosition += titleLines.length * 7 + 10;

      // Conteúdo do roteiro
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      
      const contentLines = scriptToExport.content.split("\n");
      
      for (const line of contentLines) {
        // Verificar se é um cabeçalho de cena
        if (line.startsWith("[CENA") || line.startsWith("Formato:") || line.startsWith("Apresentador:") || line.startsWith("Objetivo:")) {
          doc.setFont("helvetica", "bold");
        } else if (line.startsWith("NARRADOR:") || line.startsWith("APRESENTADOR:")) {
          doc.setFont("helvetica", "bolditalic");
        } else {
          doc.setFont("helvetica", "normal");
        }

        const wrappedLines = doc.splitTextToSize(line, maxWidth);
        
        for (const wrappedLine of wrappedLines) {
          // Verificar se precisa de nova página
          if (yPosition > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
          }
          
          doc.text(wrappedLine, margin, yPosition);
          yPosition += 6;
        }
        
        // Espaço extra após linhas vazias
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

      // Salvar o PDF
      const filename = `${currentClient?.name}_${scriptToExport.title}`.replace(/[^a-zA-Z0-9_-]/g, "_") + ".pdf";
      doc.save(filename);
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
      alert("Erro ao exportar PDF. Tente novamente.");
    }
  };

  const calculateSendDate = (campaign: Campaign) => {
    // Adiciona T12:00:00 para evitar problemas de timezone
    const campaignDate = new Date(campaign.date + "T12:00:00");
    const sendDate = new Date(campaignDate);
    sendDate.setDate(sendDate.getDate() - campaign.sendBefore);
    return sendDate.toLocaleDateString("pt-BR");
  };

  const formatDate = (dateString: string) => {
    // Adiciona T12:00:00 para evitar problemas de timezone
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
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
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Tema Dark Premium</p>
              <p className="text-xs text-muted-foreground mt-1">Acentos em Vermelho</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedClient ? (
          // Linktree Hub
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
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{client.segment}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{client.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-accent">
                        {client.campaigns.length} campanhas
                      </span>
                      <ChevronDown className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Client Detail View
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

            {/* Calendar View */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white">Calendário de Campanhas 2026</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {currentClient?.campaigns.map((campaign) => {
                  const isExpanded = expandedCampaign === campaign.id;
                  const isEditing = editingCampaign === campaign.id;
                  const editedCampaign = editedCampaigns[campaign.id] || campaign;
                  const sendDate = calculateSendDate(campaign);

                  return (
                    <div
                      key={campaign.id}
                      className="border border-border rounded-lg bg-card/50 overflow-hidden hover:border-accent/50 transition-colors"
                    >
                      {/* Campaign Header */}
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

                      {/* Campaign Details */}
                      {isExpanded && (
                        <div className="border-t border-border p-4 bg-card/30">
                          {isEditing ? (
                            // Edit Mode
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
                            // View Mode
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Descrição</p>
                                <p className="text-white">{campaign.description}</p>
                              </div>

                              {campaign.offers.length > 0 && (
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
                              )}

                              {campaign.scripts.length > 0 && (
                                <div>
                                  <p className="text-sm text-muted-foreground mb-3">Roteiros de Conteúdo</p>
                                  <p className="text-xs text-muted-foreground mb-3">Clique em um roteiro para abrir em tela cheia</p>
                                  <div className="space-y-3">
                                    {campaign.scripts.map((script) => (
                                      <div
                                        key={script.id}
                                        onClick={() => openScriptModal(script, campaign.scripts, campaign.title)}
                                        className="bg-background/50 rounded-lg p-4 border border-border/50 cursor-pointer hover:border-accent hover:bg-background/70 transition-all group"
                                      >
                                        <div className="flex items-center justify-between mb-2">
                                          <h5 className="font-semibold text-white text-sm group-hover:text-accent transition-colors">
                                            {script.title}
                                          </h5>
                                          <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                          {script.content.substring(0, 150)}...
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {campaign.scripts.length === 0 && (
                                <div className="bg-background/30 rounded-lg p-4 border border-dashed border-border text-center">
                                  <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                  <p className="text-sm text-muted-foreground">Nenhum roteiro cadastrado</p>
                                  <p className="text-xs text-muted-foreground mt-1">Este cliente será configurado manualmente</p>
                                </div>
                              )}

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

            {/* Timeline Info */}
            <div className="bg-card/50 border border-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-white mb-4">Informações de Envio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-white">Datas Menores</p>
                    <p className="text-xs text-muted-foreground">
                      Enviar conteúdo 1 semana antes da data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-white">Datas Maiores</p>
                    <p className="text-xs text-muted-foreground">
                      Enviar conteúdo 1 mês antes da data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Roteiro INDIVIDUAL - Tela Cheia */}
      {scriptModalOpen && selectedScript && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          {/* Header do Modal */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-card/50">
            <div className="flex items-center gap-4">
              <button
                onClick={closeScriptModal}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground hover:text-white" />
              </button>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white">{selectedCampaignTitle}</h2>
                <p className="text-sm text-muted-foreground">{currentClient?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={exportScriptToPDF}
                className="flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">Baixar PDF</span>
              </button>
              {isEditingScript ? (
                <button
                  onClick={saveScript}
                  className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Save className="w-4 h-4" />
                  <span className="hidden md:inline">Salvar</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingScript(true)}
                  className="flex items-center gap-2 px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm"
                >
                  <Edit2 className="w-4 h-4" />
                  <span className="hidden md:inline">Editar</span>
                </button>
              )}
            </div>
          </div>

          {/* Navegação entre roteiros */}
          {allScripts.length > 1 && (
            <div className="flex items-center justify-center gap-4 p-3 bg-card/30 border-b border-border">
              <button
                onClick={() => navigateScript('prev')}
                disabled={currentScriptIndex === 0}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5 text-accent" />
              </button>
              <span className="text-sm text-muted-foreground">
                Roteiro {currentScriptIndex + 1} de {allScripts.length}
              </span>
              <button
                onClick={() => navigateScript('next')}
                disabled={currentScriptIndex === allScripts.length - 1}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-5 h-5 text-accent" />
              </button>
            </div>
          )}

          {/* Conteúdo do Roteiro */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
              {isEditingScript && editedScript ? (
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Título do Roteiro
                    </label>
                    <input
                      type="text"
                      value={editedScript.title}
                      onChange={(e) => updateScript("title", e.target.value)}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Conteúdo do Roteiro
                    </label>
                    <textarea
                      value={editedScript.content}
                      onChange={(e) => updateScript("content", e.target.value)}
                      rows={20}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none font-mono text-sm leading-relaxed"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-card/50 rounded-lg p-6 md:p-8 border border-border">
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-6">{selectedScript.title}</h3>
                  <div className="text-white whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                    {selectedScript.content}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer com lista de roteiros */}
          {allScripts.length > 1 && (
            <div className="border-t border-border bg-card/50 p-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-xs text-muted-foreground mb-3">Todos os roteiros desta campanha:</p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allScripts.map((script, index) => (
                    <button
                      key={script.id}
                      onClick={() => {
                        setCurrentScriptIndex(index);
                        setSelectedScript(script);
                        setEditedScript({ ...script });
                        setIsEditingScript(false);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-colors ${
                        index === currentScriptIndex
                          ? 'bg-accent text-white'
                          : 'bg-background/50 text-muted-foreground hover:bg-background hover:text-white'
                      }`}
                    >
                      {script.title.length > 30 ? script.title.substring(0, 30) + '...' : script.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Planner 2026 • Hub de Planejamento para Clientes • Tema Dark Premium com Acentos Vermelhos</p>
        </div>
      </footer>
    </div>
  );
}
