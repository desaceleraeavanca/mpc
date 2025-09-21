import React from 'react';
import type { Chapter, ContentProps } from './types';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-800 border-b pb-2">{children}</h2>;
const H3: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <h3 className={`text-xl font-semibold mt-6 mb-3 text-slate-700 ${className || ''}`.trim()}>{children}</h3>;
const P: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <p className={`mb-4 text-base leading-relaxed text-slate-600 ${className || ''}`.trim()}>{children}</p>;
const UL: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <ul className={`list-disc list-inside space-y-2 mb-4 pl-4 ${className || ''}`.trim()}>{children}</ul>;
const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => <li>{children}</li>;
const Blockquote: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <blockquote className={`border-l-4 border-violet-500 pl-4 italic text-slate-600 my-6 py-2 ${className || ''}`.trim()}>{children}</blockquote>;
const Strong: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <strong className={`font-semibold text-slate-900 ${className || ''}`.trim()}>{children}</strong>;
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => <input {...props} className={`w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition bg-white text-slate-900 ${className || ''}`} />;
const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => <textarea {...props} rows={2} className={`w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition bg-white text-slate-900 ${className || ''}`} />;
const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => <input type="checkbox" {...props} className={`h-5 w-5 rounded border-slate-300 text-violet-600 focus:ring-violet-500 cursor-pointer bg-white ${className || ''}`} />;


export const BOOK_CONTENT: Chapter[] = [
  {
    id: 0,
    title: "Introdução: Diagnóstico Inicial",
    shortTitle: "Introdução",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>"O mundo não precisa de mais um livro sobre produtividade perfeita. Precisa de um manual para quem vive no caos."</Blockquote>
        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>Antes de mergulhar nos métodos, vamos fazer um diagnóstico honesto do seu ponto de partida. Entender suas frustrações atuais e o que você busca é o primeiro passo para construir um sistema que *realmente* funcione para você. Responda às perguntas abaixo com sinceridade. Não há respostas certas ou erradas, apenas a *sua* realidade.</P>
        <hr className="my-8 border-slate-200" />
        <H2>✅ Checklist Interativo: Diagnóstico Inicial</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {/* Item 1 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Métodos Frustrantes:</Strong> Liste 3 métodos, dicas ou ferramentas de produtividade que você já tentou e que <Strong>não funcionaram bem</Strong> para você a longo prazo. Por que você acha que eles falharam *para você*?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Método/Dica 1 e Porquê:</label>
                            <Textarea name="c0_method1" value={formData.c0_method1 || ''} onChange={handleInputChange} />
                        </div>
                         <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Método/Dica 2 e Porquê:</label>
                            <Textarea name="c0_method2" value={formData.c0_method2 || ''} onChange={handleInputChange} />
                        </div>
                         <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700">Método/Dica 3 e Porquê:</label>
                            <Textarea name="c0_method3" value={formData.c0_method3 || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                    <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Dica: Pense em rotinas matinais rígidas, sistemas de organização complexos, apps que você abandonou, etc.</P>
                </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Gatilhos do Caos:</Strong> Qual foi o último "incêndio" ou imprevisto significativo que <Strong>bagunçou completamente</Strong> seus planos ou sua rotina? Como você reagiu?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Imprevisto:</label>
                            <Input name="c0_unexpected_event" value={formData.c0_unexpected_event || ''} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Reação:</label>
                             <Input name="c0_reaction" value={formData.c0_reaction || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                    <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Dica: Pode ser uma demanda urgente, um problema técnico, uma questão pessoal, etc.</P>
                </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>3. Mudança Urgente:</Strong> Se você pudesse mudar UMA ÚNICA coisa na sua forma atual de trabalhar ou gerenciar seu tempo e energia, qual seria a mudança <Strong>mais impactante e urgente</Strong>?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Mudança Urgente:</label>
                        <Textarea name="c0_urgent_change" value={formData.c0_urgent_change || ''} onChange={handleInputChange} />
                    </div>
                    <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Dica: Seja específico! Ex: "Parar de procrastinar tarefas importantes", "Ter mais clareza do que fazer", "Sentir menos culpa no fim do dia", "Lidar melhor com interrupções".</P>
                </div>
            </div>
            {/* Item 4 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>4. Nível de Satisfação Atual:</Strong> Em uma escala de 1 a 10, qual seu nível de satisfação atual com sua capacidade de realizar o que é importante e se sentir bem no processo?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Nota (1-10):</label>
                            <Input type="number" name="c0_satisfaction_score" value={formData.c0_satisfaction_score || ''} onChange={handleInputChange} className="w-24" min="1" max="10" />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Breve comentário (opcional):</label>
                            <Input name="c0_satisfaction_comment" value={formData.c0_satisfaction_comment || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Item 5 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>5. Compromisso Inicial:</Strong> Você está pronto(a) para explorar uma abordagem diferente, aceitando que não há fórmulas mágicas, mas sim um caminho de adaptação e aprendizado?</p>
                    <div className="mt-3 flex items-center space-x-2">
                         <Checkbox name="c0_commitment" checked={!!formData.c0_commitment} onChange={handleInputChange} id="c0_commitment" />
                        <label htmlFor="c0_commitment" className="text-sm text-slate-700 cursor-pointer">Sim, estou pronto(a)!</label>
                    </div>
                    <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Ação Final Sugerida: Guarde esta página ou suas respostas. Será interessante revisitá-las ao concluir o livro/curso para ver sua evolução!</P>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 1,
    title: "Capítulo 1: Aceitando a Realidade",
    shortTitle: "Capítulo 1: Aceitando a Realidade",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>"Pare de lutar contra a maré do caos. Em vez disso, vamos aprender a surfar nela."</Blockquote>
        
        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>Neste capítulo, desmontamos a busca pela perfeição e pelo controle absoluto. O objetivo agora é começar a internalizar a aceitação da incerteza e, principalmente, *agir* de forma imperfeita, mas consistente. Vamos quebrar a paralisia do perfeccionismo com ações pequenas e imediatas.</P>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Aceitando a Realidade</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {/* Item 1 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Identifique seu Perfeccionista Interior:</Strong> Qual hábito, pensamento ou medo específico relacionado ao perfeccionismo <Strong>mais te impede de começar ou finalizar</Strong> tarefas?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Meu Principal Hábito/Medo Perfeccionista:</label>
                        <Textarea name="c1_perfectionist_habit" value={formData.c1_perfectionist_habit || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Ação "Boa o Suficiente":</Strong> Escolha UMA tarefa que você faria hoje ou amanhã. Comprometa-se a realizá-la focando em concluir (atingir o objetivo essencial) em vez de torná-la "perfeita".</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Tarefa Escolhida:</label>
                             <Input name="c1_good_enough_task" value={formData.c1_good_enough_task || ''} onChange={handleInputChange} />
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                             <Checkbox name="c1_task_done" id="c1_task_done" checked={!!formData.c1_task_done} onChange={handleInputChange} />
                             <label htmlFor="c1_task_done" className="text-sm text-slate-700 cursor-pointer">Tarefa realizada de forma "boa o suficiente"?</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>3. Regra dos 5 Minutos em Ação:</Strong> Escolha UMA tarefa que você está adiando há algum tempo. Trabalhe nela por apenas 5 minutos cronometrados, com a permissão de parar depois.</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Tarefa Adiada Escolhida:</label>
                            <Input name="c1_procrastinated_task" value={formData.c1_procrastinated_task || ''} onChange={handleInputChange} />
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                            <Checkbox name="c1_5min_rule_done" id="c1_5min_rule_done" checked={!!formData.c1_5min_rule_done} onChange={handleInputChange} />
                            <label htmlFor="c1_5min_rule_done" className="text-sm text-slate-700 cursor-pointer">Trabalhei por 5 minutos?</label>
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">(Opcional) Continuei trabalhando após os 5 min? (Sim/Não)</label>
                             <Input name="c1_continued_working" value={formData.c1_continued_working || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Item 4 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>4. Crie a Versão "Feia" (MVP):</Strong> Pense em um projeto ou ideia. Qual é a versão MAIS SIMPLES e "imperfeita" que você poderia esboçar HOJE para tirar a ideia do papel? Realize essa ação mínima.</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Ideia/Projeto:</label>
                             <Input name="c1_mvp_idea" value={formData.c1_mvp_idea || ''} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Versão Mínima/Feia a Criar Hoje:</label>
                             <Input name="c1_mvp_action" value={formData.c1_mvp_action || ''} onChange={handleInputChange} />
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                             <Checkbox name="c1_mvp_created" id="c1_mvp_created" checked={!!formData.c1_mvp_created} onChange={handleInputChange} />
                            <label htmlFor="c1_mvp_created" className="text-sm text-slate-700 cursor-pointer">Versão mínima criada?</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Item 5 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>5. Reflexão Pós-Ação Imperfeita:</Strong> Após realizar uma das ações acima, reserve 1 minuto. Como você se sentiu ao agir *apesar* da imperfeição? Houve algum alívio ou progresso?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Sentimento/Observação:</label>
                        <Textarea name="c1_reflection" value={formData.c1_reflection || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Teste da Simplicidade</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
            <P>Pegue uma tarefa ou projeto que parece complexo ou que você está adiando por causa disso:</P>
            <div className="space-y-4">
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">1. Liste Todas as Etapas Percebidas:</label>
                    <Textarea name="c1_exercise_all_steps" value={formData.c1_exercise_all_steps || ''} onChange={handleInputChange} rows={3} />
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">2. Corte Pela Metade (ou Mais!):</label>
                    <p className="text-xs text-slate-600 !mb-2">O que é *realmente* essencial para o primeiro passo? O que pode ser eliminado, simplificado ou adiado?</p>
                    <Textarea name="c1_exercise_cut_steps" value={formData.c1_exercise_cut_steps || ''} onChange={handleInputChange} rows={3} />
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">3. Defina a Ação Mínima Viável:</label>
                     <p className="text-xs text-slate-600 !mb-2">Qual é a menor ação física e concreta que você pode realizar AGORA para iniciar?</p>
                    <Input name="c1_exercise_min_action" value={formData.c1_exercise_min_action || ''} onChange={handleInputChange} />
                    <div className="flex items-center space-x-2 pt-3">
                        <Checkbox name="c1_exercise_commit" id="c1_exercise_commit" checked={!!formData.c1_exercise_commit} onChange={handleInputChange} />
                        <label htmlFor="c1_exercise_commit" className="text-sm text-slate-800 font-medium cursor-pointer">Comprometa-se: Realize esta Ação Mínima Viável!</label>
                    </div>
                </div>
            </div>
            
            <div className="border border-slate-200 rounded-lg mt-6">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Exemplo Prático (Criar um Blog):</div>
                <div className="p-4 text-slate-700">
                    <UL className="!mb-0 space-y-3">
                        <LI><Strong>Antes (Planejamento Excessivo):</Strong> Escolher nicho, pesquisar domínio, contratar hospedagem, instalar WordPress, escolher tema, customizar design, criar logo, planejar calendário editorial, escrever 10 posts... (Paralisia!)</LI>
                        <LI><Strong>Depois (Simplificado - Foco no 1º Valor):</Strong> Escrever 1 artigo simples sobre um tema que gosto, publicar em uma plataforma gratuita (Medium, LinkedIn Pulse, etc).</LI>
                        <LI><Strong>Ação Mínima Viável:</Strong> Escrever o primeiro parágrafo do artigo HOJE.</LI>
                    </UL>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Capítulo 2: A Arte de Errar Melhor",
    shortTitle: "Capítulo 2: Errar Melhor",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>"O erro não é um acidente indesejado – ele é feedback. É informação valiosa. É a bússola que nos ajuda a navegar."</Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>Superar o medo paralisante do fracasso e começar a ver os erros não como vereditos finais, mas como oportunidades cruciais de aprendizado e ajuste. Vamos aprender a analisar falhas passadas para extrair sabedoria e a enfrentar medos futuros de forma mais racional e estratégica.</P>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: A Arte de Errar Melhor</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {/* Item 1 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Mapeie um Erro Passado Significativo:</Strong> Escolha um erro profissional ou pessoal que teve um impacto relevante para você. Descreva brevemente a situação.</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Situação/Erro:</label>
                        <Textarea name="c2_past_error" value={formData.c2_past_error || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Extraia a Lição Central:</Strong> Olhando para esse erro *sem culpa*, qual foi a <Strong>principal lição objetiva</Strong> que você aprendeu sobre si mesmo(a), sobre o processo, ou sobre a situação?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Lição Principal Aprendida:</label>
                        <Textarea name="c2_main_lesson" value={formData.c2_main_lesson || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>3. Reenquadre como Dados (Estilo Edison):</Strong> Complete a frase, aplicando a lição aprendida ao erro que você mapeou: <em className="text-slate-600">"Com [o erro acima], eu não falhei, apenas descobri que/aprendi a..."</em></p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">"Com [...], eu não falhei, apenas descobri que/aprendi a [...]"</label>
                        <Textarea name="c2_reframe" value={formData.c2_reframe || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            {/* Item 4 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>4. Identifique um Medo de Erro Atual:</Strong> Pense em um projeto, decisão ou ação que você está <Strong>adiando ou hesitando</Strong> em realizar por medo de que algo dê errado. Qual é esse medo específico?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Ação/Decisão Adiada:</label>
                            <Input name="c2_procrastinated_action" value={formData.c2_procrastinated_action || ''} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 block mb-1">Medo Específico Associado:</label>
                            <Input name="c2_associated_fear" value={formData.c2_associated_fear || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Item 5 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>5. Planeje um "Erro Controlado" (Micro-Teste):</Strong> Como você poderia testar essa ação/decisão (do item 4) de uma forma <Strong>menor, mais segura e com baixo custo</Strong>, onde uma "falha" seria apenas mais um dado para aprender?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Micro-Teste/Erro Controlado:</label>
                        <Textarea name="c2_controlled_error" value={formData.c2_controlled_error || ''} onChange={handleInputChange} />
                        <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Dica: Pense em pesquisa antes de lançar, versão beta, pedir feedback em um rascunho, etc.</P>
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Teste do "Pior Cenário Simulado" (Fear-Setting)</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
            <H3 className="!mt-0 !mb-2 text-violet-800">Template: Análise de Medo (Fear-Setting)</H3>
            <div className="space-y-4">
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">1. Ação/Decisão que Causa Medo:</label>
                    <Input name="c2_fearsetting_action" value={formData.c2_fearsetting_action || ''} onChange={handleInputChange} />
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">2. Definindo o "Fracasso": (Seja concreto!)</label>
                    <Input name="c2_fearsetting_failure" value={formData.c2_fearsetting_failure || ''} onChange={handleInputChange} />
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">3. Piores Cenários Possíveis (Brainstorm):</label>
                    <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                        <p className="text-xs text-slate-600 !mb-2">Liste as consequências negativas realistas. Avalie Probabilidade (1-5) e Impacto (1-5).</p>
                        <Input name="c2_fearsetting_scenario1" value={formData.c2_fearsetting_scenario1 || ''} onChange={handleInputChange} placeholder="Cenário 1: ... (Prob: __ / Imp: __)" />
                        <Input name="c2_fearsetting_scenario2" value={formData.c2_fearsetting_scenario2 || ''} onChange={handleInputChange} placeholder="Cenário 2: ... (Prob: __ / Imp: __)" />
                    </div>
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">4. Prevenção:</label>
                    <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                        <p className="text-xs text-slate-600 !mb-2">O que você pode fazer para diminuir a probabilidade dos piores cenários?</p>
                        <Input name="c2_fearsetting_prevention" value={formData.c2_fearsetting_prevention || ''} onChange={handleInputChange} placeholder="Ação Preventiva 1: ..." />
                    </div>
                </div>
                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">5. Reparo:</label>
                    <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                        <p className="text-xs text-slate-600 !mb-2">Se o pior acontecer, como você pode consertar/mitigar? Quem pode ajudar?</p>
                        <Input name="c2_fearsetting_repair" value={formData.c2_fearsetting_repair || ''} onChange={handleInputChange} placeholder="Ação de Reparo 1: ... (Ajuda: ...)" />
                    </div>
                </div>
                 <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">6. Custo da Inação:</label>
                    <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                        <p className="text-xs text-slate-600 !mb-2">Quais os custos (financeiros, emocionais, oportunidade) de NÃO agir por 6 meses? 1 ano? 3 anos?</p>
                        <Textarea name="c2_fearsetting_inaction_cost" value={formData.c2_fearsetting_inaction_cost || ''} onChange={handleInputChange} />
                    </div>
                </div>
                 <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">7. Decisão Pós-Análise:</label>
                    <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                        <p className="text-xs text-slate-600 !mb-2">O risco de agir (com prevenção/reparo) parece maior ou menor que o custo da inação? Qual o próximo passo?</p>
                        <Textarea name="c2_fearsetting_decision" value={formData.c2_fearsetting_decision || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>

            <div className="border border-slate-200 rounded-lg mt-6">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Exemplo Rápido (Apresentar ideia ao chefe):</div>
                <div className="p-4 text-slate-700">
                    <UL className="!mb-0 space-y-3">
                        <LI><Strong>Ação:</Strong> Apresentar ideia X. <Strong>Fracasso:</Strong> Ideia ser rejeitada.</LI>
                        <LI><Strong>Pior Cenário:</Strong> Chefe achar a ideia ruim (Prob 3/Imp 3), Perder credibilidade (Prob 2/Imp 4), Ficar desmotivado (Prob 4/Imp 3).</LI>
                        <LI><Strong>Prevenção:</Strong> Pesquisar dados que suportem a ideia, pedir feedback a um colega antes, preparar respostas para possíveis objeções.</LI>
                        <LI><Strong>Reparo:</Strong> Agradecer o feedback, perguntar como melhorar, focar em outros projetos, conversar com colega para desabafar.</LI>
                        <LI><Strong>Custo Inação:</Strong> Ideia nunca sair do papel, frustração, arrependimento.</LI>
                        <LI><Strong>Decisão:</Strong> O risco de agir parece gerenciável. Próximo passo: Coletar dados X e Y.</LI>
                    </UL>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Capítulo 3: O Método MPC em Ação",
    shortTitle: "Capítulo 3: O Método MPC",
    content: ({ formData, handleInputChange }) => (
        <>
            <Blockquote>"O Ciclo Orientar -&gt; Agir -&gt; Aprender/Adaptar não é algo que você faz uma vez. É seu sistema operacional contínuo para navegar na incerteza."</Blockquote>
            
            <H3>🎯 Objetivo Desta Etapa:</H3>
            <P>Internalizar e começar a aplicar o núcleo prático do Método da Produtividade Caótica: o Ciclo contínuo e os 3 Passos diários (Bússola, Blocos de Ação, Check-in Adaptativo). O foco é criar um ritmo sustentável de clareza, ação focada (mas imperfeita) e ajuste ágil.</P>

            <hr className="my-8 border-slate-200" />

            <H2>🔄 O Ciclo da Produtividade Caótica: O Modelo Mental</H2>
            <div className="space-y-4 my-6">
              <div className="flex items-start bg-sky-50 border border-sky-200 rounded-lg p-4">
                <span className="text-3xl mr-4" aria-hidden="true">🧭</span>
                <div>
                  <h4 className="font-bold text-sky-800">ORIENTAR: <span className="font-normal italic text-sky-700">Onde estou? O que realmente importa AGORA?</span></h4>
                  <UL className="!mb-0 text-sky-700 !pl-4">
                    <LI>Ganhar Consciência (Energia, Contexto, Caos Atual).</LI>
                    <LI>Priorizar o Essencial (1-3 prioridades de alto impacto).</LI>
                    <LI>Definir a Intenção (Clareza para o próximo bloco de ação).</LI>
                  </UL>
                </div>
              </div>
              <div className="flex items-start bg-rose-50 border border-rose-200 rounded-lg p-4">
                <span className="text-3xl mr-4" aria-hidden="true">▶️</span>
                <div>
                  <h4 className="font-bold text-rose-800">AGIR: <span className="font-normal italic text-rose-700">Fazer acontecer, de forma imperfeita.</span></h4>
                  <UL className="!mb-0 text-rose-700 !pl-4">
                    <LI>Foco Deliberado (Trabalhar na prioridade sem distrações).</LI>
                    <LI>Ação Mínima Viável ("Feito &gt; Perfeito", dar o próximo passo possível).</LI>
                    <LI>Simplicidade e Robustez (Usar ferramentas simples, evitar complexidade).</LI>
                  </UL>
                </div>
              </div>
              <div className="flex items-start bg-amber-50 border border-amber-200 rounded-lg p-4">
                <span className="text-3xl mr-4" aria-hidden="true">💡</span>
                <div>
                  <h4 className="font-bold text-amber-800">APRENDER/ADAPTAR: <span className="font-normal italic text-amber-700">O que aconteceu? Como ajustar?</span></h4>
                  <UL className="!mb-0 text-amber-700 !pl-4">
                    <LI>Observar Resultados (Pausar e ver o que foi feito/mudou).</LI>
                    <LI>Extrair Aprendizado (Analisar erros/surpresas sem culpa).</LI>
                    <LI>Ajustar a Rota (Mudar intenção, prioridade ou abordagem com base no feedback).</LI>
                  </UL>
                </div>
              </div>
            </div>

            <hr className="my-8 border-slate-200" />
            
            <H2>✅ Checklist Interativo: Os 3 Passos Práticos Diários</H2>
            <div className="space-y-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3">PASSO 1: O Ritual da Bússola (Orientar Diário/Semanal)</h4>
                    <P className="text-sm text-slate-600 !mb-4">Realize diariamente (5-10 min) ou semanalmente (15-30 min)</P>
                    <div className="space-y-4">
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Agende seu Ritual:</Strong> Defina um horário consistente para seu Ritual da Bússola.</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Meu Horário:</label><Input name="c3_ritual_time" value={formData.c3_ritual_time || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Execute o Ritual HOJE:</Strong> Siga os passos abaixo:</p><div className="mt-2 border border-slate-200 rounded-lg"><div className="bg-slate-100 px-4 py-2 font-semibold text-slate-700 text-sm rounded-t-lg">Guia Detalhado do Ritual da Bússola:</div><div className="p-4 text-slate-700 space-y-3"><UL className="!mb-3 !pl-2"><LI>Respire e Centre-se: 1 minuto de respiração consciente.</LI><LI>Revise o Mapa Geral: Seus objetivos maiores.</LI><LI>Analise o Terreno: Compromissos, energia, caos.</LI><LI>Defina 1-3 Prioridades Essenciais.</LI></UL><div className="space-y-2"><div className="flex items-center gap-2"><label className="text-sm font-medium w-24">Prioridade 1:</label><Input name="c3_priority1" value={formData.c3_priority1 || ''} onChange={handleInputChange} /></div><div className="flex items-center gap-2"><label className="text-sm font-medium w-24">Prioridade 2:</label><Input name="c3_priority2" value={formData.c3_priority2 || ''} onChange={handleInputChange} /></div><div className="flex items-center gap-2"><label className="text-sm font-medium w-24">Prioridade 3:</label><Input name="c3_priority3" value={formData.c3_priority3 || ''} onChange={handleInputChange} /></div></div></div></div></div></div>
                        <div className="flex items-start"><Checkbox name="c3_priorities_visible_check" id="c3_priorities_visible_check" checked={!!formData.c3_priorities_visible_check} onChange={handleInputChange} className="mt-1 mr-4" /><label htmlFor="c3_priorities_visible_check" className="flex-1"><p><Strong>Mantenha Visível:</Strong> Anote suas 1-3 Prioridades onde você possa vê-las facilmente durante o dia.</p></label></div>
                    </div>
                </div>
                 <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3">PASSO 2: Blocos de Ação Focada (Agir)</h4>
                    <P className="text-sm text-slate-600 !mb-4">Realize ao longo do dia</P>
                    <div className="space-y-4">
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Escolha a Prioridade:</Strong> Decida qual Prioridade Essencial você vai atacar agora.</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Prioridade Escolhida:</label><Input name="c3_chosen_priority" value={formData.c3_chosen_priority || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Defina o Bloco:</Strong> Estabeleça um tempo dedicado (ex: 25 min, 50 min, 90 min).</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Duração do Bloco:</label><Input name="c3_block_duration" value={formData.c3_block_duration || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><Checkbox name="c3_minimize_interruptions_check" id="c3_minimize_interruptions_check" checked={!!formData.c3_minimize_interruptions_check} onChange={handleInputChange} className="mt-1 mr-4" /><label htmlFor="c3_minimize_interruptions_check"><p><Strong>Minimize Interrupções:</Strong> Crie seu "escudo".</p></label></div>
                        <div className="flex items-start"><Checkbox name="c3_act_with_focus_check" id="c3_act_with_focus_check" checked={!!formData.c3_act_with_focus_check} onChange={handleInputChange} className="mt-1 mr-4" /><label htmlFor="c3_act_with_focus_check"><p><Strong>Aja com Foco (Imperfeito):</Strong> Mergulhe na tarefa.</p></label></div>
                        <div className="flex items-start"><Checkbox name="c3_take_breaks_check" id="c3_take_breaks_check" checked={!!formData.c3_take_breaks_check} onChange={handleInputChange} className="mt-1 mr-4" /><label htmlFor="c3_take_breaks_check"><p><Strong>Faça Pausas Conscientes:</Strong> Alterne blocos de foco com pausas.</p></label></div>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-3">PASSO 3: Check-in Adaptativo (Aprender/Adaptar)</h4>
                    <P className="text-sm text-slate-600 !mb-4">Realize entre blocos, ao encontrar um imprevisto, ou no fim do dia</P>
                    <div className="space-y-4">
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Pause e Observe:</Strong> O que aconteceu? O que mudou?</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Observação Rápida:</label><Input name="c3_quick_observation" value={formData.c3_quick_observation || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Aprenda Rapidamente:</Strong> Algum erro ou surpresa?</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Aprendizado Rápido:</label><Input name="c3_quick_learning" value={formData.c3_quick_learning || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><div className="text-2xl mr-4 text-slate-400 select-none">☐</div><div className="flex-1"><p><Strong>Reoriente (Se Necessário):</Strong> Precisa ajustar o plano?</p><div className="mt-2 p-2 bg-white border border-dashed rounded-md flex items-center gap-2"><label className="font-semibold text-sm text-slate-700">Ajuste Necessário:</label><Input name="c3_adjustment_needed" value={formData.c3_adjustment_needed || ''} onChange={handleInputChange} /></div></div></div>
                        <div className="flex items-start"><Checkbox name="c3_celebrate_progress_check" id="c3_celebrate_progress_check" checked={!!formData.c3_celebrate_progress_check} onChange={handleInputChange} className="mt-1 mr-4" /><label htmlFor="c3_celebrate_progress_check"><p><Strong>Celebre o Progresso (Mesmo Pequeno):</Strong> Reconheça o que foi realizado.</p></label></div>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <H2>🛠️ Exercício do Capítulo: Desafio do Caos Controlado</H2>
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
                <H3 className="!mt-0 !mb-2 text-violet-800">Template: Desafio do Caos Controlado - Minha Experiência</H3>
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">1. Arena Escolhida: (Qual tarefa ou bloco de tempo?)</label>
                        <Input name="c3_exercise_arena" value={formData.c3_exercise_arena || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">2. Ritual da Bússola (Pré-Arena):</label>
                        <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                            <div><p className="font-medium text-sm text-slate-700">Prioridade Essencial #1 Definida:</p><Input name="c3_exercise_priority" value={formData.c3_exercise_priority || ''} onChange={handleInputChange} /></div>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">3. Bloco(s) de Ação Focada (Durante):</label>
                         <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                            <div><p className="font-medium text-sm text-slate-700">Alguma interrupção ou imprevisto significativo?</p><Input name="c3_exercise_interruption" value={formData.c3_exercise_interruption || ''} onChange={handleInputChange} /></div>
                            <div><p className="font-medium text-sm text-slate-700">Usei a mentalidade "Feito &gt; Perfeito"? Como?</p><Input name="c3_exercise_done_is_better" value={formData.c3_exercise_done_is_better || ''} onChange={handleInputChange} /></div>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">4. Check-in Adaptativo (Durante/Após):</label>
                         <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                            <div><p className="font-medium text-sm text-slate-700">Precisei ajustar minhas prioridades ou plano? Como?</p><Input name="c3_exercise_adjustment" value={formData.c3_exercise_adjustment || ''} onChange={handleInputChange} /></div>
                            <div><p className="font-medium text-sm text-slate-700">Qual foi o maior aprendizado durante a aplicação?</p><Input name="c3_exercise_learning" value={formData.c3_exercise_learning || ''} onChange={handleInputChange} /></div>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">5. Reflexão Final (Pós-Arena):</label>
                        <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                            <div><p className="font-medium text-sm text-slate-700">O que funcionou BEM ao aplicar os 3 Passos?</p><Textarea name="c3_exercise_worked_well" value={formData.c3_exercise_worked_well || ''} onChange={handleInputChange} /></div>
                            <div><p className="font-medium text-sm text-slate-700">O que pode ser MELHORADO na próxima vez?</p><Textarea name="c3_exercise_improvement" value={formData.c3_exercise_improvement || ''} onChange={handleInputChange} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ),
  },
  {
    id: 4,
    title: "Capítulo 4: Destruindo o \"Tudo ou Nada\" (TAE)",
    shortTitle: "Capítulo 4: O Método TAE",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "A ação imperfeita e consistente sempre superará a busca paralisante pela perfeição. Comece pequeno, aprenda rápido, melhore sempre."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Superar a mentalidade perfeccionista do "Tudo ou Nada" que nos impede de começar ou nos faz desistir no primeiro obstáculo. Vamos aprender e praticar o <Strong>Método TAE (Teste, Ajuste, Escale)</Strong> como uma ferramenta fundamental para fazer progresso incremental, aprender com a ação e construir resultados de forma sustentável, mesmo em meio à incerteza.
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🪜 O Método TAE: Teste, Ajuste, Escale</H2>
        <div className="space-y-4 my-6">
          {/* Teste */}
          <div className="flex items-start bg-blue-50 border border-blue-200 rounded-lg p-4">
            <span className="text-3xl mr-4" aria-hidden="true">🧪</span>
            <div>
              <h4 className="font-bold text-blue-800">TESTE</h4>
              <P className="!mb-0 text-blue-700">Comece pequeno, muito pequeno! Implemente sua ideia, técnica ou projeto em uma escala mínima e controlada. Trate como um <Strong>experimento</Strong>, não um lançamento final. <Strong>Objetivo principal: APRENDER rápido com baixo risco.</Strong></P>
            </div>
          </div>
          {/* Ajuste */}
          <div className="flex items-start bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <span className="text-3xl mr-4" aria-hidden="true">🔧</span>
            <div>
              <h4 className="font-bold text-yellow-800">AJUSTE</h4>
              <P className="!mb-0 text-yellow-700">Observe os resultados (dados!) do seu Teste. O que funcionou? O que não funcionou? O que foi difícil? Use esse feedback para fazer <Strong>pequenas modificações e refinamentos</Strong> na sua abordagem. <Strong>Objetivo principal: ADAPTAR e melhorar com base na realidade.</Strong> Não desista, ajuste!</P>
            </div>
          </div>
          {/* Escale */}
          <div className="flex items-start bg-green-50 border border-green-200 rounded-lg p-4">
            <span className="text-3xl mr-4" aria-hidden="true">📈</span>
            <div>
              <h4 className="font-bold text-green-800">ESCALE</h4>
              <P className="!mb-0 text-green-700">Somente <Strong>depois</Strong> de testar e ajustar, e quando sentir que a abordagem está funcionando razoavelmente bem (mesmo que não perfeita), comece a <Strong>aumentar gradualmente</Strong> a escala (mais tempo, mais frequência, mais recursos, mais funcionalidades). <Strong>Objetivo principal: EXPANDIR o que funciona, de forma sustentável.</Strong></P>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Aplicando o TAE</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
          {/* Item 1 */}
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none" aria-hidden="true">☐</div>
            <div className="flex-1">
              <p><Strong>1. Identifique um Alvo para o TAE:</Strong> Pense em um novo hábito, projeto, ideia, ferramenta ou processo que você quer implementar ou melhorar, mas onde o perfeccionismo ou a sensação de "ser muito grande" está te travando.</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Meu Alvo para o TAE:</label>
                <Textarea name="c4_tae_target" value={formData.c4_tae_target || ''} onChange={handleInputChange} aria-label="Meu Alvo para o TAE" />
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none" aria-hidden="true">☐</div>
            <div className="flex-1">
              <p><Strong>2. Defina seu Mini-TESTE (TAE - Fase 1):</Strong> Qual é a <Strong>menor ação ou versão possível</Strong> que você pode realizar HOJE ou AMANHÃ para *testar* esse alvo? Qual o <Strong>objetivo principal de aprendizado</Strong> desse teste?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                <div>
                  <label className="font-semibold text-sm text-slate-700 mb-1 block">Mini-Teste Planejado:</label>
                  <Input name="c4_mini_test_plan" value={formData.c4_mini_test_plan || ''} onChange={handleInputChange} aria-label="Mini-Teste Planejado" />
                </div>
                <div>
                  <label className="font-semibold text-sm text-slate-700 mb-1 block">Objetivo de Aprendizado:</label>
                  <Input name="c4_learning_goal" value={formData.c4_learning_goal || ''} onChange={handleInputChange} aria-label="Objetivo de Aprendizado" />
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none" aria-hidden="true">☐</div>
            <div className="flex-1">
              <p><Strong>3. Execute o Mini-TESTE:</Strong> Realize a pequena ação definida acima.</p>
              <div className="mt-2 flex items-center space-x-2">
                <Checkbox name="c4_test_executed" id="c4_test_executed" checked={!!formData.c4_test_executed} onChange={handleInputChange} aria-label="Teste realizado?" />
                <label htmlFor="c4_test_executed" className="text-sm text-slate-700 cursor-pointer">Teste realizado?</label>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none" aria-hidden="true">☐</div>
            <div className="flex-1">
              <p><Strong>4. Analise e Planeje o AJUSTE (TAE - Fase 2):</Strong> Com base no resultado (mesmo que mínimo) do seu teste: O que você aprendeu? Qual <Strong>pequeno ajuste</Strong> você faria para a *próxima* tentativa?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                <div>
                  <label className="font-semibold text-sm text-slate-700 mb-1 block">Aprendizado do Teste:</label>
                  <Input name="c4_test_learning" value={formData.c4_test_learning || ''} onChange={handleInputChange} aria-label="Aprendizado do Teste" />
                </div>
                <div>
                  <label className="font-semibold text-sm text-slate-700 mb-1 block">Ajuste Planejado:</label>
                  <Input name="c4_adjustment_plan" value={formData.c4_adjustment_plan || ''} onChange={handleInputChange} aria-label="Ajuste Planejado" />
                </div>
              </div>
              <P className="text-xs text-slate-500 mt-2 italic">Dica: O ajuste pode ser mudar o horário, simplificar ainda mais, usar outra ferramenta, pedir ajuda, etc.</P>
            </div>
          </div>
          {/* Item 5 */}
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none" aria-hidden="true">☐</div>
            <div className="flex-1">
              <p><Strong>5. Pense na ESCALA (TAE - Fase 3 - Apenas Planejamento):</Strong> <Strong>SE</Strong> (e somente se) após alguns ciclos de Teste e Ajuste você sentir que está funcionando, como você poderia <Strong>aumentar gradualmente</Strong> a escala no futuro?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700 block mb-1">Ideia de Escala Futura:</label>
                <Textarea name="c4_scaling_idea" value={formData.c4_scaling_idea || ''} onChange={handleInputChange} aria-label="Ideia de Escala Futura" />
                <P className="!mb-0 text-xs text-slate-500 mt-2 italic">Ex: Se o teste foi meditar 1 min, o ajuste foi para 2 min, a escala pode ser fazer 5 min consistentemente por uma semana.</P>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Aplicando o TAE no Seu Projeto/Objetivo</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
          <H3 className="!mt-0 !mb-2 text-violet-800">Template: Ciclo de Iteração TAE</H3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-sm text-slate-700 block mb-1">Projeto/Objetivo:</label>
              <Input name="c4_exercise_project" value={formData.c4_exercise_project || ''} onChange={handleInputChange} aria-label="Projeto/Objetivo" />
            </div>
            <div>
              <label className="font-semibold text-sm text-slate-700 block mb-1">Data de Início:</label>
              <Input name="c4_exercise_start_date" value={formData.c4_exercise_start_date || ''} onChange={handleInputChange} type="date" aria-label="Data de Início" />
            </div>
          </div>
          
          <div className="space-y-4 bg-white/50 p-4 rounded border border-white">
            <h4 className="font-bold text-slate-800">Ciclo 1</h4>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Teste 1: (Qual foi o menor passo/experimento inicial?)</label>
              <Textarea name="c4_exercise_test1" value={formData.c4_exercise_test1 || ''} onChange={handleInputChange} aria-label="Teste 1" />
            </div>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Resultado/Aprendizado 1: (O que aconteceu? O que aprendi?)</label>
              <Textarea name="c4_exercise_result1" value={formData.c4_exercise_result1 || ''} onChange={handleInputChange} aria-label="Resultado/Aprendizado 1" />
            </div>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Ajuste 1 Planejado: (Qual pequena mudança farei?)</label>
              <Textarea name="c4_exercise_adjustment1" value={formData.c4_exercise_adjustment1 || ''} onChange={handleInputChange} aria-label="Ajuste 1 Planejado" />
            </div>
          </div>

          <div className="space-y-4 bg-white/50 p-4 rounded border border-white">
            <h4 className="font-bold text-slate-800">Ciclo 2 (Realizado após o Ajuste 1)</h4>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Teste 2 (Ajustado): (Qual foi o próximo passo/experimento?)</label>
              <Textarea name="c4_exercise_test2" value={formData.c4_exercise_test2 || ''} onChange={handleInputChange} aria-label="Teste 2" />
            </div>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Resultado/Aprendizado 2: (O que aconteceu? O que aprendi?)</label>
              <Textarea name="c4_exercise_result2" value={formData.c4_exercise_result2 || ''} onChange={handleInputChange} aria-label="Resultado/Aprendizado 2" />
            </div>
            <div>
              <label className="font-medium text-sm text-slate-700 block mb-1">Ajuste 2 Planejado / Ideia de Escala: (Qual a próxima mudança ou como posso escalar um pouco?)</label>
              <Textarea name="c4_exercise_adjustment2" value={formData.c4_exercise_adjustment2 || ''} onChange={handleInputChange} aria-label="Ajuste 2 Planejado / Ideia de Escala" />
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg mt-6">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Exemplo Prático (Lançar Curso Online):</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0 space-y-3">
                <LI><Strong>Projeto:</Strong> Curso Online sobre X.</LI>
                <LI><Strong>Ciclo 1 - Teste:</Strong> Criar um post no Instagram perguntando o interesse no tema X e quais as maiores dúvidas. <br /><span className="text-sm text-slate-500"><em>Resultado:</em> Alto engajamento, dúvidas A, B, C surgiram.</span> <br /><span className="text-sm text-slate-500"><em>Ajuste:</em> Focar o conteúdo inicial nas dúvidas A e B.</span></LI>
                <LI><Strong>Ciclo 2 - Teste:</Strong> Oferecer uma aula ao vivo gratuita sobre a dúvida A (baixo custo/risco). <br /><span className="text-sm text-slate-500"><em>Resultado:</em> Muitos inscritos, feedback positivo, pessoas perguntaram se haveria curso completo.</span> <br /><span className="text-sm text-slate-500"><em>Ajuste/Escala:</em> Criar uma pré-venda para um mini-curso focado nas dúvidas A, B, C com desconto.</span></LI>
              </UL>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Capítulo 5: Paradoxo do Controle (Flexibilidade)",
    shortTitle: "Capítulo 5: Paradoxo do Controle",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "Eficácia real não vem de controlar tudo. Vem de focar no que podemos controlar (nossas respostas, nossa energia) e desenvolver a adaptabilidade para lidar com o resto."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Revisitar nossa relação com o controle. Entender profundamente por que a busca pelo controle absoluto é fútil e estressante, e aprender estratégias práticas para cultivar <Strong>controle flexível</Strong>: criar estruturas que oferecem direção, mas têm maleabilidade suficiente para absorver o inesperado e permitir a adaptação, usando a regra 80/20 para planejamento como ferramenta chave.
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🤔 Por Que o Controle Total é um Mito (e Custa Caro)?</H2>
        <div className="space-y-4">
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Raízes da Busca pelo Controle:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI>Ilusão de Segurança (tentativa de eliminar a ansiedade da incerteza).</LI>
                <LI>Pressão Social e Expectativas (parecer "no controle").</LI>
                <LI>Proteção do Ego (dificuldade em admitir limites).</LI>
              </UL>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Custos Ocultos do Controle Rígido:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI><Strong>Fragilidade:</Strong> Sistemas quebram facilmente com imprevistos.</LI>
                <LI><Strong>Oportunidades Perdidas:</Strong> Foco excessivo no plano cega para desvios positivos.</LI>
                <LI><Strong>Estresse e Exaustão:</Strong> Lutar constantemente contra a realidade é desgastante.</LI>
                <LI><Strong>Criatividade Sufocada:</Strong> Inovação raramente nasce da ordem perfeita.</LI>
                <LI><Strong>Relacionamentos Danificados:</Strong> Rigidez pode gerar impaciência e crítica.</LI>
              </UL>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Reação Cerebral à Falta de Controle:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI>Alarme da Amígdala (resposta de estresse: luta/fuga/congelamento).</LI>
                <LI>Risco de Indefensabilidade Aprendida (parar de tentar agir).</LI>
                <LI>Custo Fisiológico do Estresse Crônico (cortisol elevado).</LI>
              </UL>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Como Modular a Reação Cerebral:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI><Strong>Reenquadramento (Reframing):</Strong> Ver incerteza como desafio/oportunidade, não ameaça.</LI>
                <LI><Strong>Foco no Controle Interno:</Strong> Concentrar naquilo que *podemos* controlar (ações, atitude, respiração).</LI>
                <LI><Strong>Mindfulness e Aceitação:</Strong> Observar a realidade sem julgamento excessivo, reduzir a luta interna.</LI>
              </UL>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Cultivando o Controle Flexível</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>1. Identifique sua Área de Controle Excessivo:</Strong> Pense em UMA área específica (projeto, relacionamento, parte da sua rotina) onde você sente a maior necessidade de controlar tudo nos mínimos detalhes.</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Minha Área de Controle Excessivo:</label>
                <Textarea name="c5_excessive_control_area" value={formData.c5_excessive_control_area || ''} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>2. Micro-Ação de "Soltar as Rédeas":</Strong> Qual a <Strong>menor ação possível</Strong> que você pode realizar HOJE para introduzir um *pouco* mais de flexibilidade ou confiança nessa área?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                  <div>
                    <label className="font-semibold text-sm text-slate-700 mb-1">Minha Micro-Ação de Flexibilidade:</label>
                    <p className="text-xs text-slate-500 !mb-1 italic">Ex: delegar uma pequena decisão, não checar progresso por X horas...</p>
                    <Input name="c5_flexibility_action" value={formData.c5_flexibility_action || ''} onChange={handleInputChange} />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox name="c5_action_done" id="c5_action_done" checked={!!formData.c5_action_done} onChange={handleInputChange} />
                    <label htmlFor="c5_action_done" className="text-sm text-slate-700 cursor-pointer">Ação realizada?</label>
                  </div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>3. Planeje com Buffer (80/20):</Strong> Ao planejar seu <Strong>próximo dia ou bloco de trabalho significativo</Strong>, aplique conscientemente a regra "Planeje 80%, Deixe 20% Livre".</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Meu Buffer de ~20% está em:</label>
                <Textarea name="c5_buffer_plan" value={formData.c5_buffer_plan || ''} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>4. Observe a Reação ao Imprevisto:</Strong> No próximo evento inesperado, <Strong>pause por 5 segundos</Strong> antes de reagir. Apenas observe sua sensação inicial.</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <div className="flex items-center space-x-2">
                  <Checkbox name="c5_pause_done" id="c5_pause_done" checked={!!formData.c5_pause_done} onChange={handleInputChange} />
                  <label htmlFor="c5_pause_done" className="text-sm text-slate-700 cursor-pointer">Consegui pausar e observar?</label>
                 </div>
                 <div>
                    <label className="font-semibold text-sm text-slate-700 mb-1">(Opcional) Sensação inicial observada:</label>
                    <Input name="c5_initial_feeling" value={formData.c5_initial_feeling || ''} onChange={handleInputChange} />
                  </div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>5. Use o Buffer Intencionalmente:</Strong> Relate como usou (ou como usaria) seu buffer hoje.</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Como usei/usaria meu buffer hoje:</label>
                <Textarea name="c5_buffer_usage" value={formData.c5_buffer_usage || ''} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Desafio do Planejamento 80/20</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
            <H3 className="!mt-0 !mb-2 text-violet-800">Template: Experiência com Planejamento 80/20</H3>
            
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">Período de Análise: (Ex: Dia DD/MM, Semana X)</label>
                <Input name="c5_exercise_period" value={formData.c5_exercise_period || ''} onChange={handleInputChange} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                  <label className="font-semibold text-sm text-slate-700 block mb-1">1. Capacidade Total Estimada (Horas):</label>
                  <Input name="c5_exercise_total_hours" value={formData.c5_exercise_total_hours || ''} onChange={handleInputChange} type="number" />
              </div>
              <div>
                  <label className="font-semibold text-sm text-slate-700 block mb-1">2. Limite de 80% Planejado (Horas):</label>
                  <Input name="c5_exercise_80_limit" value={formData.c5_exercise_80_limit || ''} onChange={handleInputChange} type="number" />
              </div>
            </div>

            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">3. Tarefas/Compromissos Agendados (Dentro dos 80%):</label>
                <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                    <Textarea name="c5_exercise_scheduled_tasks" value={formData.c5_exercise_scheduled_tasks || ''} onChange={handleInputChange} />
                </div>
            </div>

            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">4. Buffer de 20% Reservado (Onde/Como?):</label>
                <p className="text-xs text-slate-600 !mb-2 italic">Ex: Blocos livres na agenda, estimativas folgadas, "Bloco Flex/Caos"</p>
                <Textarea name="c5_exercise_buffer_reserved" value={formData.c5_exercise_buffer_reserved || ''} onChange={handleInputChange} />
            </div>

            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">5. Como o Buffer Foi Usado (Realidade):</p>
                 <div className="space-y-4 mt-2 bg-white/50 p-3 rounded border border-white">
                    <div>
                        <p className="font-medium text-sm text-slate-700">Imprevistos que surgiram e foram absorvidos:</p>
                        <Textarea name="c5_exercise_buffer_unexpected" value={formData.c5_exercise_buffer_unexpected || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <p className="font-medium text-sm text-slate-700">Usei para pausas/reflexão:</p>
                        <Textarea name="c5_exercise_buffer_breaks" value={formData.c5_exercise_buffer_breaks || ''} onChange={handleInputChange} />
                    </div>
                 </div>
            </div>

             <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">6. Reflexão Sobre a Experiência:</p>
                 <div className="space-y-4 mt-2 bg-white/50 p-3 rounded border border-white">
                    <div>
                        <p className="font-medium text-sm text-slate-700">Como foi ter essa folga incorporada? (Sensação de estresse, realismo)</p>
                        <Textarea name="c5_exercise_reflection_feeling" value={formData.c5_exercise_reflection_feeling || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <p className="font-medium text-sm text-slate-700">Qual o impacto na sensação de controle (paradoxalmente) e produtividade real?</p>
                        <Textarea name="c5_exercise_reflection_impact" value={formData.c5_exercise_reflection_impact || ''} onChange={handleInputChange} />
                    </div>
                 </div>
            </div>

        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "Capítulo 6: Autoridade Autêntica (Erros)",
    shortTitle: "Capítulo 6: Autoridade Autêntica",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "A maior prova de que você sabe o que está fazendo é mostrar como já errou no passado... e o que aprendeu com isso."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Entender como sua jornada através do caos e os erros que você superou podem, paradoxalmente, se tornar fontes de <Strong>conexão, confiança e autoridade autêntica</Strong>. Vamos aprender a selecionar e compartilhar essas experiências de forma <Strong>ética e construtiva</Strong>, transformando "cicatrizes de batalha" em lições valiosas para você e para os outros.
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🤔 Por Que Compartilhar Erros (Superados) Constrói Autoridade?</H2>
        <div className="space-y-4">
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Os 5 Pilares da Autoridade Autêntica:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI><Strong>Relatabilidade e Conexão:</Strong> Vulnerabilidade (bem colocada) cria pontes, perfeição cria distância. Histórias reais conectam.</LI>
                <LI><Strong>Autoconsciência e Humildade:</Strong> Admitir erros demonstra maturidade e disposição para aprender (qualidades de liderança).</LI>
                <LI><Strong>Confiança via Transparência:</Strong> Honestidade sobre desafios desarma desconfiança em um mundo "curado".</LI>
                <LI><Strong>Lições Memoráveis e Práticas:</Strong> Histórias de erros superados ensinam mais que conselhos abstratos (valor prático).</LI>
                <LI><Strong>Posicionamento como Guia Experiente:</Strong> Mostra que você não apenas leu o mapa, mas sobreviveu (e aprendeu com) o território.</LI>
              </UL>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">A Ciência da Conexão com Falhas Superadas:</div>
            <div className="p-4 text-slate-700">
              <UL className="!mb-0">
                <LI><Strong>Empatia (Neurônios-Espelho):</Strong> Sentimos a emoção da história, criando um laço forte.</LI>
                <LI><Strong>Estrutura Narrativa:</Strong> Cérebro adora histórias de desafio -&gt; luta -&gt; resolução/aprendizado.</LI>
                <LI><Strong>Alívio da Comparação Social:</Strong> Ouvir sobre falhas de outros reduz nossa própria pressão e inadequação.</LI>
                <LI><Strong>Aprendizado Vicário:</Strong> Aprendemos com os erros dos outros sem sentir a mesma dor.</LI>
              </UL>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Construindo Sua Narrativa de Erro Construtivo</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>1. Relembre uma Lição Valiosa:</Strong> Volte ao Checklist do Cap 2 (ou pense em outro erro). Qual foi a <Strong>lição principal</Strong> que você extraiu de um erro ou desafio significativo que já superou?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Lição Principal (do Erro X):</label>
                <Textarea name="c6_valuable_lesson" value={formData.c6_valuable_lesson || ''} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>2. Identifique o Público Beneficiado:</Strong> Quem <Strong>realmente poderia se beneficiar</Strong> ao ouvir sobre sua experiência e essa lição específica?</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                <label className="font-semibold text-sm text-slate-700">Público-Alvo para esta Lição:</label>
                <Textarea name="c6_target_audience" value={formData.c6_target_audience || ''} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>3. Estruture sua Mini-História (Pontos Chave):</Strong> Esboce os pontos principais da sua narrativa. Mantenha o foco na jornada e na lição, não na autopiedade.</p>
              <div className="mt-4 border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg text-sm">Estrutura Sugerida:</div>
                <div className="p-4 text-slate-700">
                  <UL className="!mb-4">
                      <LI><Strong>Contexto:</Strong> Onde você estava, qual era o objetivo inicial?</LI>
                      <LI><Strong>O "Fiasco":</Strong> O que deu errado de forma concreta?</LI>
                      <LI><Strong>O Momento "Aha!":</Strong> Qual foi o ponto de virada, a percepção chave, o aprendizado?</LI>
                      <LI><Strong>A Mudança de Rota:</Strong> Como você se adaptou ou corrigiu o curso?</LI>
                      <LI><Strong>A Lição Universal:</Strong> Qual o conselho prático ou mensagem principal?</LI>
                  </UL>
                  <Textarea name="c6_mini_story" value={formData.c6_mini_story || ''} onChange={handleInputChange} rows={4} placeholder="Esboce sua história aqui..." />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>4. Verificação Ética e de Intenção:</Strong> Antes de compartilhar, pergunte-se honestamente:</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                <div className="flex items-center space-x-2"><Checkbox name="c6_ethics_check1" id="c6_ethics_check1" checked={!!formData.c6_ethics_check1} onChange={handleInputChange} /><label htmlFor="c6_ethics_check1" className="text-sm">Minha intenção principal é <Strong className="text-slate-800">ajudar/conectar/ensinar</Strong>.</label></div>
                <div className="flex items-center space-x-2"><Checkbox name="c6_ethics_check2" id="c6_ethics_check2" checked={!!formData.c6_ethics_check2} onChange={handleInputChange} /><label htmlFor="c6_ethics_check2" className="text-sm">A história foca no <Strong className="text-slate-800">meu aprendizado e na lição aplicável</Strong>.</label></div>
                <div className="flex items-center space-x-2 pt-2"><Checkbox name="c6_ethics_check3" id="c6_ethics_check3" checked={!!formData.c6_ethics_check3} onChange={handleInputChange} /><label htmlFor="c6_ethics_check3" className="text-sm text-slate-700">Estou sendo respeitoso(a) com outras pessoas envolvidas?</label></div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
            <div className="flex-1">
              <p><Strong>5. Compartilhe em Pequena Escala (Teste TAE!):</Strong> Dê um pequeno passo para compartilhar essa história/lição.</p>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                  <div>
                    <label className="font-semibold text-sm text-slate-700 mb-1">Minha Ação de Compartilhamento Inicial:</label>
                    <p className="text-xs text-slate-500 !mb-1 italic">Ex: Contar para UM amigo, escrever um post curto, mencionar em uma reunião.</p>
                    <Input name="c6_sharing_action" value={formData.c6_sharing_action || ''} onChange={handleInputChange} />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox name="c6_action_done" id="c6_action_done" checked={!!formData.c6_action_done} onChange={handleInputChange} />
                    <label htmlFor="c6_action_done" className="text-sm text-slate-700 cursor-pointer">Ação realizada?</label>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Mapeando Suas Histórias de Erro que Ensinam</H2>
        <div className="bg-violet-50 p-4 sm:p-6 rounded-lg border border-violet-200 space-y-4">
          <H3 className="!mt-0 !mb-2 text-violet-800">Template: Meu Banco de Histórias MPC</H3>
          <P className="text-sm text-violet-700 !mb-4">Use este banco para mapear 2-3 histórias. Volte aqui sempre que superar um novo desafio significativo para adicionar ao seu repertório.</P>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-violet-200 rounded-lg text-sm">
              <thead className="bg-violet-100">
                <tr>
                  <th className="p-3 font-semibold text-left text-violet-900">Erro/Desafio</th>
                  <th className="p-3 font-semibold text-left text-violet-900">Lição Principal</th>
                  <th className="p-3 font-semibold text-left text-violet-900">Público Ideal</th>
                  <th className="p-3 font-semibold text-left text-violet-900">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-violet-200">
                  <td className="p-2"><Input name="c6_table_error1" value={formData.c6_table_error1 || 'Lançamento Falho Prod X'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_lesson1" value={formData.c6_table_lesson1 || 'Valide a demanda antes de construir!'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_audience1" value={formData.c6_table_audience1 || 'Empreendedores'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_status1" value={formData.c6_table_status1 || 'Compartilhado'} onChange={handleInputChange} className="!p-1" /></td>
                </tr>
                <tr className="border-t border-violet-200">
                   <td className="p-2"><Input name="c6_table_error2" value={formData.c6_table_error2 || 'Conflito com Colega Y'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_lesson2" value={formData.c6_table_lesson2 || 'Ouça mais, reaja menos.'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_audience2" value={formData.c6_table_audience2 || 'Líderes'} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_status2" value={formData.c6_table_status2 || 'Estruturado'} onChange={handleInputChange} className="!p-1" /></td>
                </tr>
                <tr className="border-t border-violet-200 bg-slate-50/50">
                  <td className="p-2"><Input name="c6_table_error3" value={formData.c6_table_error3 || ''} onChange={handleInputChange} className="!p-1" placeholder="[Adicionar Nova História]" /></td>
                  <td className="p-2"><Input name="c6_table_lesson3" value={formData.c6_table_lesson3 || ''} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_audience3" value={formData.c6_table_audience3 || ''} onChange={handleInputChange} className="!p-1" /></td>
                  <td className="p-2"><Input name="c6_table_status3" value={formData.c6_table_status3 || 'Mapeado'} onChange={handleInputChange} className="!p-1" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 7,
    title: "Capítulo 7: Regra 80/20 na Prática",
    shortTitle: "Capítulo 7: A Regra 80/20",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "A maioria das coisas não importa tanto quanto você pensa. Descubra o que realmente gera impacto e elimine (ou minimize drasticamente) o resto."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Aprender a usar o Princípio de Pareto (Regra 80/20) como uma lente poderosa para identificar os poucos elementos (tarefas, esforços, clientes, fontes de informação, etc.) que geram a maior parte dos resultados (os "20% vitais"). O foco é direcionar sua energia limitada para esses pontos de alavancagem e, crucialmente, eliminar, reduzir ou delegar o restante (os "80% triviais") para maximizar sua eficácia em meio ao caos.
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🤔 Entendendo a Regra 80/20 (Princípio de Pareto)</H2>
        <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">O que é?</div>
                <div className="p-4 text-slate-700">
                    <UL className="!mb-0">
                        <LI>Observação (não lei exata) de que cerca de <Strong>80% dos efeitos vêm de aproximadamente 20% das causas</Strong>.</LI>
                        <LI>Exemplos Clássicos: 80% vendas vêm de 20% clientes; 80% bugs vêm de 20% código; 80% resultados vêm de 20% esforço.</LI>
                        <LI>Ponto Chave: <Strong>Desigualdade inerente</Strong> entre esforço e resultado. Nem tudo tem o mesmo peso.</LI>
                    </UL>
                </div>
            </div>
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Por que é crucial na Produtividade Caótica?</div>
                <div className="p-4 text-slate-700">
                     <UL className="!mb-0">
                        <LI><Strong>Recursos Limitados:</Strong> No caos, tempo e energia são escassos. Precisamos focar onde faz mais diferença.</LI>
                        <LI><Strong>Combate Vieses:</Strong> Ajuda a superar o viés de urgência (fazer o barulhento) e o viés de completude (fazer o fácil) focando no <em>impacto</em>.</LI>
                        <LI><Strong>Otimiza o Foco:</Strong> Alinha nossa atenção consciente (limitada) com o que realmente move a agulha.</LI>
                        <LI><Strong>Libera Energia:</Strong> Eliminar o trivial libera recursos mentais e físicos para o vital.</LI>
                    </UL>
                </div>
            </div>
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">O Cérebro como "Filtro 80/20" (e como ajudá-lo):</div>
                <div className="p-4 text-slate-700">
                     <UL className="!mb-0">
                        <LI><Strong>Filtros Naturais (SAR):</Strong> Cérebro já filtra informações, mas nem sempre pelo critério de <em>impacto</em>.</LI>
                        <LI><Strong>Programando o SAR:</Strong> Definir conscientemente nossos "20% vitais" ajuda nosso cérebro a prestar mais atenção neles.</LI>
                        <LI><Strong>Reduz Fadiga de Decisão:</Strong> Diminui drasticamente o número de itens que exigem nossa máxima atenção.</LI>
                    </UL>
                </div>
            </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Aplicando o Filtro 80/20 HOJE</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Faça a Pergunta 80/20 AGORA:</Strong> Olhe para sua lista de tarefas de hoje (ou para o que você <em>acha</em> que precisa fazer). Pergunte-se: <Strong>"Quais 1-3 tarefas aqui provavelmente gerarão 80% do valor ou progresso real do dia?"</Strong></p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Meus ~20% Vitais de Hoje:</label>
                        <Textarea name="c7_vital_tasks" value={formData.c7_vital_tasks || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
             <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Identifique 1 Item Trivial para Eliminar/Reduzir:</Strong> Olhe para o resto da sua lista ou para suas atividades habituais. Qual é UMA tarefa ou atividade que consome tempo/energia mas gera <Strong>pouco valor real</Strong>?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Item Trivial Identificado:</label>
                        <Textarea name="c7_trivial_task" value={formData.c7_trivial_task || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>3. Decida a Ação sobre o Trivial:</Strong> Para o item trivial acima, escolha UMA ação IMEDIATA:</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <P className="!mb-0 text-sm text-slate-600 bg-slate-100 p-2 rounded">Opções: Eliminar Completamente / Reduzir Frequência/Duração / Delegar / Automatizar</P>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 mb-1">Ação Específica:</label>
                            <p className="text-xs text-slate-500 !mb-1 italic">Ex: "Não fazer X hoje", "Checar e-mail só 2x", "Pedir para Y fazer Z", "Criar template para W"</p>
                            <Input name="c7_trivial_action" value={formData.c7_trivial_action || ''} onChange={handleInputChange} />
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                          <Checkbox name="c7_action_taken" id="c7_action_taken" checked={!!formData.c7_action_taken} onChange={handleInputChange} />
                          <label htmlFor="c7_action_taken" className="text-sm text-slate-700 cursor-pointer">Decisão/Ação tomada?</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>4. Proteja o Vital:</Strong> Como você pode garantir que dedicará seu <Strong>melhor tempo e energia</Strong> à sua tarefa vital #1 identificada no item 1?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Estratégia para Proteger o Vital #1:</label>
                        <Textarea name="c7_protect_vital_strategy" value={formData.c7_protect_vital_strategy || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
             <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>5. Questione uma Fonte de Informação:</Strong> Pense nas suas fontes de informação (e-mails, redes sociais, notícias, reuniões). Qual delas parece consumir muito tempo para pouco insight útil?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Fonte Trivial e Ação de Redução:</label>
                        <Textarea name="c7_trivial_source" value={formData.c7_trivial_source || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Teste do 80/20 na Sua Vida</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
            <H3 className="!mt-0 !mb-0 text-violet-800">Template: Análise 80/20 Pessoal</H3>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">1. Arena de Análise:</label>
                 <p className="text-xs text-slate-600 !mb-2">Qual área específica você vai analisar? Ex: Tarefas da última semana, Fontes de estresse, Clientes do negócio, Uso do tempo livre</p>
                <Input name="c7_exercise_arena" value={formData.c7_exercise_arena || ''} onChange={handleInputChange} />
            </div>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">2. Liste os Componentes e 3. Avalie o Impacto:</label>
                <P className="text-xs text-slate-600 !mb-2">Liste os itens e estime o impacto de cada um (Positivo ou Negativo: Baixo, Médio, Alto).</P>
                <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                    <Textarea name="c7_exercise_components" value={formData.c7_exercise_components || ''} onChange={handleInputChange} rows={4} placeholder="Componente 1 - Impacto: Alto..." />
                </div>
            </div>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">4. Identifique os ~20% Vitais e 5. Identifique os ~80% Triviais:</label>
                 <P className="text-xs text-slate-600 !mb-2">Com base na sua avaliação, destaque os itens de alto impacto (vitais) e os de baixo impacto/alto custo (triviais).</P>
                  <Textarea name="c7_exercise_vital_trivial" value={formData.c7_exercise_vital_trivial || ''} onChange={handleInputChange} rows={4} placeholder="Vitais: ...&#10;Triviais: ..." />
            </div>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">6. Plano de Ação 80/20:</label>
                 <div className="space-y-4 mt-2 bg-white/50 p-3 rounded border border-white">
                    <div>
                        <p className="font-medium text-sm text-slate-700">Amplificar os 20%:</p>
                        <p className="text-xs text-slate-500 !mb-1 italic">Qual a primeira ação para dedicar MAIS foco a UM item vital?</p>
                        <Input name="c7_exercise_amplify" value={formData.c7_exercise_amplify || ''} onChange={handleInputChange} />
                    </div>
                    <div>
                        <p className="font-medium text-sm text-slate-700">Reduzir/Eliminar os 80%:</p>
                        <p className="text-xs text-slate-500 !mb-1 italic">Qual o item trivial mais fácil de eliminar/reduzir imediatamente? Qual a ação?</p>
                        <Input name="c7_exercise_reduce" value={formData.c7_exercise_reduce || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox name="c7_exercise_commit_amplify" id="c7_exercise_commit_amplify" checked={!!formData.c7_exercise_commit_amplify} onChange={handleInputChange} />
                  <label htmlFor="c7_exercise_commit_amplify" className="text-sm text-slate-700 font-medium cursor-pointer">Compromisso: Amplificar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox name="c7_exercise_commit_reduce" id="c7_exercise_commit_reduce" checked={!!formData.c7_exercise_commit_reduce} onChange={handleInputChange} />
                  <label htmlFor="c7_exercise_commit_reduce" className="text-sm text-slate-700 font-medium cursor-pointer">Compromisso: Reduzir</label>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 8,
    title: "Capítulo 8: Modelo Antifrágil",
    shortTitle: "Capítulo 8: O Modelo Antifrágil",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
            "Não basta ser resistente ao caos. Você precisa aprender a crescer com ele."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
            Ir além da resiliência (voltar ao normal após um choque) e explorar o conceito de <Strong>Antifragilidade</Strong>: a capacidade de sistemas (incluindo nós mesmos, nossos projetos ou negócios) de se <Strong>beneficiarem</Strong> e se <Strong>fortalecerem</Strong> com a exposição a estressores, volatilidade, erros e caos (dentro de certos limites). Vamos aprender estratégias práticas para <em>construir</em> intencionalmente mais antifragilidade em nossa vida e trabalho.
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🤔 Entendendo a Antifragilidade</H2>
        <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">A Tríade de Taleb:</div>
                <div className="p-4 text-slate-700">
                    <UL className="!mb-0">
                        <LI><Strong>Frágil:</Strong> Quebra com o estresse/choque (Ex: Taça de cristal, plano rígido demais). Odeia volatilidade.</LI>
                        <LI><Strong>Robusto/Resiliente:</Strong> Suporta o estresse/choque e volta ao estado original (Ex: Rocha, sistema com bom backup). Indiferente à volatilidade (até certo ponto).</LI>
                        <LI><Strong>Antifrágil:</Strong> <Strong>Melhora e se fortalece</Strong> com o estresse/choque/erro (Ex: Sistema imunológico pós-vacina, músculos pós-exercício, negócios que se reinventam pós-crise). <Strong>Gosta</Strong> de um certo nível de volatilidade/desordem.</LI>
                    </UL>
                </div>
            </div>
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Por que buscar Antifragilidade (e não só Resiliência)?</div>
                <div className="p-4 text-slate-700">
                     <UL className="!mb-0">
                        <LI>O mundo é inerentemente volátil e imprevisível (Cisnes Negros acontecem).</LI>
                        <LI>Sistemas apenas robustos podem estagnar ou eventualmente quebrar com choques grandes.</LI>
                        <LI>A antifragilidade permite não apenas sobreviver, mas <Strong>prosperar e ganhar vantagem competitiva</Strong> *por causa* da desordem.</LI>
                    </UL>
                </div>
            </div>
            <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Conexão com a Produtividade Caótica:</div>
                <div className="p-4 text-slate-700">
                    <P className="!mb-0">Os princípios do MPC (aceitar incerteza, aprender com erros/TAE, flexibilidade, 80/20, simplicidade) são <Strong>blocos de construção essenciais</Strong> para a antifragilidade. O MPC te prepara para ser antifrágil.</P>
                </div>
            </div>
             <div className="border border-slate-200 rounded-lg">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Exemplos na Natureza e Ciência:</div>
                <div className="p-4 text-slate-700">
                     <UL className="!mb-0">
                        <LI><Strong>Hormesis:</Strong> Doses baixas de estresse fortalecem (exercício, vacinas).</LI>
                        <LI><Strong>Neuroplasticidade:</Strong> Cérebro se reorganiza e fortalece com desafios e aprendizado (muitas vezes via erro!).</LI>
                        <LI><Strong>Crescimento Pós-Traumático (CPT):</Strong> Algumas pessoas crescem psicologicamente após adversidades.</LI>
                        <LI><Strong>Sistemas Adaptativos Complexos (SAC):</Strong> Sistemas vivos evoluem e aprendem com a interação e o feedback (inclusive caótico) do ambiente.</LI>
                    </UL>
                </div>
            </div>
        </div>
        
        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo: Construindo Sua Antifragilidade</H2>
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Identifique sua MAIOR Fragilidade Atual:</Strong> Pense em seu trabalho, negócio ou projeto principal. Qual é o <Strong>ponto mais vulnerável</Strong> a um choque inesperado, erro ou mudança de cenário?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Minha Principal Fragilidade:</label>
                        <Textarea name="c8_main_fragility" value={formData.c8_main_fragility || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
             <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Aplique a Estratégia Barbell (Micro-Ação):</Strong> Para equilibrar segurança e oportunidade:</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                        <div>
                            <label className="font-semibold text-sm text-slate-700 mb-1">(Segurança) Ação para Robustecer Área Crítica:</label>
                            <div className="flex items-center space-x-2">
                                <Input name="c8_barbell_safety" value={formData.c8_barbell_safety || ''} onChange={handleInputChange} />
                                <Checkbox name="c8_barbell_safety_check" id="c8_barbell_safety_check" checked={!!formData.c8_barbell_safety_check} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-slate-700 mb-1">(Oportunidade/TAE) Pequena "Aposta" de Baixo Risco:</label>
                             <div className="flex items-center space-x-2">
                                <Input name="c8_barbell_opportunity" value={formData.c8_barbell_opportunity || ''} onChange={handleInputChange} />
                                <Checkbox name="c8_barbell_opportunity_check" id="c8_barbell_opportunity_check" checked={!!formData.c8_barbell_opportunity_check} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>3. Crie Opcionalidade (Ideia):</Strong> Pense em UMA maneira de aumentar suas opções e reduzir dependências no futuro.</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Ideia para Criar Opcionalidade:</label>
                        <Textarea name="c8_optionality_idea" value={formData.c8_optionality_idea || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>4. Transforme um Problema em Oportunidade:</Strong> Olhe para um problema, erro ou desafio RECENTE. Como você poderia <Strong>extrair valor</Strong> disso?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Problema -&gt; Oportunidade/Aprendizado Estratégico:</label>
                        <Textarea name="c8_problem_to_opportunity" value={formData.c8_problem_to_opportunity || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
             <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>5. Simplifique para Robustecer:</Strong> Identifique UM processo, ferramenta ou sistema em seu trabalho que seja <Strong>complexo demais e propenso a falhas</Strong>. Qual a forma MAIS SIMPLES de realizar a mesma função essencial?</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Processo Complexo -&gt; Ação de Simplificação:</label>
                        <Textarea name="c8_simplify_action" value={formData.c8_simplify_action || ''} onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🛠️ Exercício do Capítulo: Criando Sua Estratégia Antifrágil</H2>
        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
            <H3 className="!mt-0 !mb-0 text-violet-800">Template: Análise Antifrágil de um Desafio</H3>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">1. Desafio/Fragilidade Atual:</label>
                <Textarea name="c8_exercise_challenge" value={formData.c8_exercise_challenge || ''} onChange={handleInputChange} />
            </div>
             <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">2. Análise de Risco (Mentalidade TAE/Barbell):</label>
                <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                    <Textarea name="c8_exercise_risk_analysis" value={formData.c8_exercise_risk_analysis || ''} onChange={handleInputChange} rows={3} placeholder="O que é extremamente seguro? Quais apostas de baixo risco posso fazer?" />
                </div>
            </div>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">3. Geração de Opcionalidade:</label>
                 <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                    <Textarea name="c8_exercise_optionality" value={formData.c8_exercise_optionality || ''} onChange={handleInputChange} rows={3} placeholder="Como posso criar mais opções? (novas habilidades, contatos, fontes de renda, etc.)" />
                </div>
            </div>
             <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">4. Transformando o Problema em Vantagem (Pensamento Antifrágil Central):</label>
                 <div className="space-y-2 mt-2 bg-white/50 p-3 rounded border border-white">
                    <Textarea name="c8_exercise_advantage" value={formData.c8_exercise_advantage || ''} onChange={handleInputChange} rows={3} placeholder="Como esse desafio pode me fortalecer? Que habilidade ele me força a desenvolver?" />
                </div>
            </div>
            <div>
                <label className="font-semibold text-sm text-slate-700 block mb-1">5. Ação Antifrágil Imediata (TAE!):</label>
                <P className="text-xs text-slate-600 !mb-2">Qual o menor passo concreto que posso dar nos próximos dias para testar uma solução de baixo risco OU começar a construir opcionalidade?</P>
                <div className="flex items-center space-x-3">
                    <Input name="c8_exercise_immediate_action" value={formData.c8_exercise_immediate_action || ''} onChange={handleInputChange} className="flex-1" />
                     <div className="flex items-center space-x-2">
                        <Checkbox name="c8_exercise_action_done" id="c8_exercise_action_done" checked={!!formData.c8_exercise_action_done} onChange={handleInputChange} />
                        <label htmlFor="c8_exercise_action_done" className="text-sm text-slate-700 font-medium cursor-pointer">Feito!</label>
                     </div>
                </div>
            </div>
        </div>
      </>
    ),
  },
  {
    id: 9,
    title: "Capítulo 9: Semana Intensiva MPC",
    shortTitle: "Capítulo 9: Semana Intensiva MPC",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "Teoria sem prática é apenas entretenimento. A verdadeira transformação acontece na arena."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Mergulhar de cabeça na prática! Durante os próximos 7 dias, você aplicará intencionalmente os conceitos e ferramentas chave do Método da Produtividade Caótica™ em sua rotina. O foco não é a perfeição, mas o <Strong>engajamento ativo</Strong>, a <Strong>observação consciente</Strong> e a <Strong>construção de momentum</Strong>. Cada dia terá um desafio prático específico. Prepare-se para vivenciar o MPC!
        </P>

        <hr className="my-8 border-slate-200" />

        <H2>🚀 Seu Desafio de 7 Dias:</H2>
        <div className="space-y-4">
          {/* Day 1 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 1: Mapeando Seu Caos Pessoal</div>
            <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Consciência (Base do Ciclo MPC - Orientar).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Ao longo do dia, observe e anote (aqui mesmo ou em um caderno) as respostas para:</P>
              <UL className="!mb-0">
                <LI>Quais foram os 2-3 maiores <Strong>imprevistos ou interrupções</Strong> que surgiram?</LI>
                <LI>Qual <Strong>tarefa consumiu mais tempo</Strong> do que o esperado ou te deixou <Strong>sobrecarregado(a)</Strong> sem gerar tanto resultado?</LI>
                <LI>Em que momento você se sentiu mais <Strong>perdido(a) ou sem foco</Strong>?</LI>
              </UL>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                <label className="font-semibold text-sm text-slate-700">Registro Dia 1:</label>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Imprevistos/Interrupções:</label>
                  <Textarea name="c9_d1_interruptions" value={formData.c9_d1_interruptions || ''} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Tarefa Drenadora/Ineficaz:</label>
                  <Textarea name="c9_d1_draining_task" value={formData.c9_d1_draining_task || ''} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Momento de Perda de Foco:</label>
                  <Textarea name="c9_d1_focus_loss" value={formData.c9_d1_focus_loss || ''} onChange={handleInputChange} />
                </div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> O que esse mapeamento inicial te revela sobre as fontes do <em>seu</em> caos?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Checklist da Introdução. <br />
                <Strong>Hashtag:</Strong> #MPCDia1 #MPCMapeandoCaos
              </P>
            </div>
          </div>

          {/* Day 2 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 2: Criando Seu Mapa de Fracassos Estratégicos</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Aprender com Erros (Cap 2 e 6).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Reserve 15-20 minutos. Pense em UM erro ou falha significativa do seu passado (profissional ou pessoal). Responda:</P>
              <UL className="!mb-0">
                <LI>Qual foi a <Strong>causa raiz</Strong> do erro (indo além do superficial)?</LI>
                <LI>Qual foi a <Strong>lição mais importante</Strong> aprendida?</LI>
                <LI>Como essa lição <Strong>pode te ajudar a tomar uma decisão melhor HOJE</Strong> ou esta semana? (Aplicação prática).</LI>
              </UL>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 2:</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Erro/Falha:</label><Input name="c9_d2_error" value={formData.c9_d2_error || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Causa Raiz:</label><Input name="c9_d2_root_cause" value={formData.c9_d2_root_cause || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Lição Principal:</label><Input name="c9_d2_lesson" value={formData.c9_d2_lesson || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Aplicação Hoje/Semana:</label><Input name="c9_d2_application" value={formData.c9_d2_application || ''} onChange={handleInputChange} /></div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> Como se sente ao olhar para um erro como fonte de estratégia, e não de culpa?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Checklist do Capítulo 2 e 6. <br />
                <Strong>Hashtag:</Strong> #MPCDia2 #MPCErrarÉAprender
              </P>
            </div>
          </div>

          {/* Day 3 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 3: Testando o "Pior Cenário Simulado" (Fear-Setting)</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Superar Medo e Paralisia (Cap 2).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Escolha UM objetivo, tarefa ou decisão importante que te causa medo ou hesitação atualmente. Aplique o Fear-Setting respondendo às 3 perguntas chave:</P>
              <UL className="!mb-0">
                <LI>Qual o <Strong>pior cenário realista</Strong> se eu tentar e falhar? (Defina o medo).</LI>
                <LI>O que posso fazer de concreto para <Strong>PREVENIR</Strong> esse pior cenário?</LI>
                <LI>Se acontecer, o que farei para <Strong>REPARAR</Strong> ou minimizar os danos? (Plano B).</LI>
              </UL>
               <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 3:</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Ação/Decisão com Medo:</label><Input name="c9_d3_fear_action" value={formData.c9_d3_fear_action || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Pior Cenário Realista Principal:</label><Input name="c9_d3_worst_case" value={formData.c9_d3_worst_case || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">1 Ação de Prevenção Chave:</label><Input name="c9_d3_prevention" value={formData.c9_d3_prevention || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">1 Ação de Reparo Chave:</label><Input name="c9_d3_repair" value={formData.c9_d3_repair || ''} onChange={handleInputChange} /></div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> O medo parece mais gerenciável agora que foi definido e confrontado com planos?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Template Fear-Setting no Checklist do Cap 2. <br />
                <Strong>Hashtag:</Strong> #MPCDia3 #MPCEnfrentandoMedo
              </P>
            </div>
          </div>
          
          {/* Day 4 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 4: Experimentando um "Erro Controlado" (TAE na Prática)</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Ação Iterativa e Aprendizado Rápido (Cap 4).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Pense em uma pequena ideia, mudança ou nova abordagem que você gostaria de implementar (pode ser algo bem simples!). Aplique UM ciclo rápido de TAE:</P>
              <UL className="!mb-0">
                <LI><Strong>Teste:</Strong> Qual o menor experimento possível para testar isso HOJE (1-15 min)? Realize-o!</LI>
                <LI><Strong>Ajuste:</Strong> Com base no resultado (mínimo que seja), qual pequeno ajuste você faria para a próxima vez?</LI>
              </UL>
                <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 4:</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Ideia/Mudança Testada:</label><Input name="c9_d4_idea" value={formData.c9_d4_idea || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Mini-Teste Realizado:</label><Input name="c9_d4_test" value={formData.c9_d4_test || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Resultado/Aprendizado Imediato:</label><Input name="c9_d4_result" value={formData.c9_d4_result || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Ajuste Planejado:</label><Input name="c9_d4_adjustment" value={formData.c9_d4_adjustment || ''} onChange={handleInputChange} /></div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> Como foi agir pequeno e focar no aprendizado rápido em vez de esperar a perfeição?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Checklist e o Exercício do Cap 4. <br />
                <Strong>Hashtag:</Strong> #MPCDia4 #MPCTesteTAE
              </P>
            </div>
          </div>

          {/* Day 5 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 5: Criando Seu Ritual de Ancoragem no Caos</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Gestão do Estado Interno (Energia/Foco - Conceito do Cap 3/5).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Desenhe seu "botão de pausa" pessoal - um ritual de 1-3 minutos para se recentrar em momentos de estresse ou sobrecarga. Escolha 2-3 técnicas simples que funcionam para VOCÊ (respiração, movimento rápido, mantra, focar nos sentidos, revisar prioridade #1, etc.). Pratique seu ritual pelo menos UMA VEZ hoje, mesmo sem crise.</P>
               <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 5 (Meu Ritual):</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Técnica 1 Escolhida:</label><Input name="c9_d5_tech1" value={formData.c9_d5_tech1 || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Técnica 2 Escolhida:</label><Input name="c9_d5_tech2" value={formData.c9_d5_tech2 || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Sequência Rápida:</label><Input name="c9_d5_sequence" value={formData.c9_d5_sequence || ''} onChange={handleInputChange} /></div>
                <div className="flex items-center space-x-2">
                  <Checkbox name="c9_d5_practiced" id="c9_d5_practiced" checked={!!formData.c9_d5_practiced} onChange={handleInputChange} />
                  <label htmlFor="c9_d5_practiced" className="text-sm text-slate-700 cursor-pointer">Pratiquei Hoje?</label>
                </div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> Ter um ritual rápido pode te ajudar a responder melhor (em vez de reagir) ao caos?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Ideias no Checklist do Cap 9 (do livro original). <br />
                <Strong>Hashtag:</Strong> #MPCDia5 #MPCAncoraNoCaos
              </P>
            </div>
          </div>
          
          {/* Day 6 */}
           <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 6: Automatizando ou Delegando Algo Pequeno</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Liberar Energia Eliminando o Trivial (Cap 7 - 80/20).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Identifique UMA tarefa pequena, repetitiva e de baixo valor que você faz regularmente. Escolha UMA ação para lidar com ela HOJE:</P>
              <UL className="!mb-0">
                  <LI>Posso <Strong>automatizar</Strong> (total ou parcialmente) com tecnologia (app, template, regra)?</LI>
                  <LI>Posso <Strong>delegar</Strong> para outra pessoa (colega, familiar, IA)?</LI>
                  <LI>Posso simplesmente <Strong>PARAR</Strong> de fazer isso sem grandes consequências?</LI>
              </UL>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 6 (Ação 80/20):</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Tarefa Trivial Identificada:</label><Input name="c9_d6_trivial_task" value={formData.c9_d6_trivial_task || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Ação Escolhida (Automatizar/Delegar/Parar):</label><Input name="c9_d6_action" value={formData.c9_d6_action || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Plano/Execução da Ação Hoje:</label><Input name="c9_d6_plan" value={formData.c9_d6_plan || ''} onChange={handleInputChange} /></div>
                <div className="flex items-center space-x-2">
                  <Checkbox name="c9_d6_done" id="c9_d6_done" checked={!!formData.c9_d6_done} onChange={handleInputChange} />
                  <label htmlFor="c9_d6_done" className="text-sm text-slate-700 cursor-pointer">Ação Realizada?</label>
                </div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Rápida:</Strong> Quanto tempo/energia mental você poderia liberar a longo prazo eliminando ou otimizando pequenas tarefas triviais?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Checklist do Cap 7. <br />
                <Strong>Hashtag:</Strong> #MPCDia6 #MPC8020NaPratica
              </P>
            </div>
          </div>

          {/* Day 7 */}
          <div className="border border-slate-200 rounded-lg">
            <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">Dia 7: Fazendo Seu "Relatório de Vulnerabilidade" (Reflexão Final)</div>
             <div className="p-4 text-slate-700 space-y-4">
              <P className="!mb-0"><Strong>Foco:</Strong> Consolidar Aprendizados e Definir Próximos Passos (Ciclo MPC - Aprender/Adaptar).</P>
              <P className="!mb-0"><Strong>Missão Hoje:</Strong> Reserve 15-20 minutos em um momento tranquilo. Revise suas anotações dos últimos 6 dias (ou sua experiência geral). Responda às perguntas do template abaixo:</P>
              <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-3">
                 <label className="font-semibold text-sm text-slate-700">Registro Dia 7 (Relatório de Vulnerabilidade):</label>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Maior Sucesso / O que funcionou melhor nesta semana?</label><Textarea name="c9_d7_success" value={formData.c9_d7_success || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Maior Dificuldade / Onde "falhei" ou escorreguei?</label><Textarea name="c9_d7_difficulty" value={formData.c9_d7_difficulty || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Principal Insight / Surpresa da Semana?</label><Textarea name="c9_d7_insight" value={formData.c9_d7_insight || ''} onChange={handleInputChange} /></div>
                <div><label className="text-sm font-medium text-slate-600 block mb-1">Meu Compromisso para Continuar:</label><Textarea name="c9_d7_commitment" value={formData.c9_d7_commitment || ''} onChange={handleInputChange} /></div>
              </div>
              <P className="!mb-0"><Strong>Reflexão Final:</Strong> O objetivo não era perfeição. Reconheça seu esforço e aprendizado. Você está mais preparado(a) para navegar no caos agora?</P>
              <P className="text-sm text-slate-500 !mb-0">
                <Strong>Recurso:</Strong> Revisite o Checklist do Cap 10 (sobre o plano de 30 dias). <br />
                <Strong>Hashtag:</Strong> #MPCDia7 #MPCRelatorioFinal
              </P>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <H2>🏆 Conclusão do Bootcamp:</H2>
        <P>
          Parabéns por completar (ou se engajar com) o Desafio de 7 Dias! Esta imersão prática é apenas o começo. Use seus aprendizados e seu "Relatório de Vulnerabilidade" para alimentar seu Plano de Ação de 30 Dias e continuar integrando o Método da Produtividade Caótica™ na sua vida. Lembre-se: é uma jornada contínua de adaptação!
        </P>
      </>
    ),
  },
  {
    id: 10,
    title: "Capítulo 10: Integrando para Sempre",
    shortTitle: "Capítulo 10: Integrando para Sempre",
    content: ({ formData, handleInputChange }) => (
        <>
            <Blockquote>
                "A Produtividade Caótica não é um destino a ser alcançado, mas uma forma de viajar – um processo constante de orientação, ação e adaptação."
            </Blockquote>

            <H3>🎯 Objetivo Desta Etapa:</H3>
            <P>
                Consolidar seus aprendizados e transformar a Produtividade Caótica em uma filosofia e prática sustentáveis para sua vida. Vamos revisar os princípios fundamentais, focar na personalização do <em>seu</em> sistema e criar um plano de ação concreto para manter o momentum e continuar usando o caos a seu favor no longo prazo.
            </P>

            <hr className="my-8 border-slate-200" />

            <H2>📜 As 10 "Regras" Fundamentais da Produtividade Caótica</H2>
            <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">1. Aceite o Caos, Não Lute Contra Ele:</div>
                    <div className="p-4 text-slate-700">Abrace incerteza e imprevisibilidade como normais. Pare de gastar energia no controle impossível.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">2. Busque Progresso, Abandone a Perfeição:</div>
                    <div className="p-4 text-slate-700">Ação imperfeita e consistente &gt; busca paralisante pela perfeição. "Feito" é (geralmente) melhor.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">3. Veja o Erro Como Feedback Valioso:</div>
                    <div className="p-4 text-slate-700">Falhas contêm informações cruciais. Extraia o aprendizado e ajuste a rota, sem culpa.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">4. Cultive a Flexibilidade Acima da Rigidez:</div>
                    <div className="p-4 text-slate-700">Sua capacidade de adaptar-se às mudanças é mais importante que a perfeição do plano inicial.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">5. Foque no Vital (80/20), Ignore o Trivial:</div>
                    <div className="p-4 text-slate-700">Nem tudo importa igual. Concentre energia nos 20% que geram 80% dos resultados. Elimine/minimize o resto.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">6. Comece Pequeno, Aprenda Rápido (TAE):</div>
                    <div className="p-4 text-slate-700">Use experimentação (Teste, Ajuste, Escale) para lidar com incerteza e fazer progressos incrementais.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">7. Abrace a Simplicidade Robusta:</div>
                    <div className="p-4 text-slate-700">Sistemas simples são mais resilientes e adaptáveis no caos do que os complexos. Menos é mais eficaz.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">8. Gerencie Sua Energia, Não Apenas Seu Tempo:</div>
                    <div className="p-4 text-slate-700">Reconheça flutuações de energia (física/mental/emocional) e ajuste seu trabalho/expectativas.</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">9. Construa Antifragilidade (Opções + Resiliência+):</div>
                    <div className="p-4 text-slate-700">Vá além de resistir. Busque formas de se fortalecer <em>com</em> o caos (opções, aprendizado com estressores).</div>
                </div>
                <div className="border border-slate-200 rounded-lg">
                    <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 rounded-t-lg">10. Aja Agora, Não Espere o Momento Ideal:</div>
                    <div className="p-4 text-slate-700">Clareza vem da ação. Dê o próximo passo possível, mesmo que pequeno e imperfeito.</div>
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <H2>✅ Checklist Interativo: Criando SEU Sistema MPC Personalizado</H2>
            <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                {/* Item 1 */}
                <div className="flex items-start">
                    <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                    <div className="flex-1">
                        <p><Strong>1. Autoconhecimento Pós-Jornada:</Strong> Reflita sobre sua experiência com o livro e o bootcamp (Caps 1-9). Quais foram os <Strong>maiores insights sobre VOCÊ</Strong> e sua forma de lidar com o caos e a produtividade?</p>
                        <div className="mt-3 border-l-2 border-slate-300 pl-4 py-2 bg-slate-100/50 rounded">
                             <p className="font-semibold text-sm text-slate-600 mb-2">Perguntas Guias:</p>
                             <UL className="!pl-2 !mb-0">
                                <LI>Qual a natureza predominante do <em>meu</em> caos (interrupções, prioridades mudando, interno)?</LI>
                                <LI>Quais meus ritmos naturais de energia/foco (matutino/vespertino, precisa de pausas frequentes)?</LI>
                                <LI>Quais técnicas MPC ressoaram MAIS comigo (Ciclo, TAE, 80/20, Bússola, etc.)? Quais pareceram MENOS naturais?</LI>
                                <LI>Quais meus pontos fortes (que posso alavancar) e fracos (que preciso apoiar) ao lidar com incerteza?</LI>
                             </UL>
                        </div>
                        <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                            <label className="font-semibold text-sm text-slate-700">Meus Insights Chave:</label>
                            <Textarea name="c10_key_insights" value={formData.c10_key_insights || ''} onChange={handleInputChange} rows={4} />
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start">
                    <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                    <div className="flex-1">
                         <p><Strong>2. Selecione Suas Ferramentas Nucleares:</Strong> Com base nos insights acima, escolha as <Strong>2-3 ferramentas ou técnicas</Strong> do Método MPC que você acredita que trarão o <Strong>maior benefício imediato</Strong> se aplicadas consistentemente. Não tente fazer tudo de uma vez!</p>
                         <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                            <label className="font-semibold text-sm text-slate-700">Minhas Ferramentas MPC Foco:</label>
                            <Textarea name="c10_core_tools" value={formData.c10_core_tools || ''} onChange={handleInputChange} />
                            <p className="text-xs text-slate-500 mt-2 italic">Ex: Ritual da Bússola, TAE para projetos novos, Análise 80/20 semanal</p>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start">
                    <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                    <div className="flex-1">
                         <p><Strong>3. Adapte as Ferramentas à SUA Realidade:</Strong> Como você pode <Strong>ajustar ou simplificar</Strong> essas 2-3 ferramentas escolhidas para que elas se encaixem melhor no seu contexto, rotina e preferências? (Lembre-se: princípios acima de ferramentas específicas).</p>
                         <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-2">
                            <div>
                                <label className="font-semibold text-sm text-slate-700">Adaptação da Ferramenta 1:</label>
                                <Input name="c10_tool1_adaptation" value={formData.c10_tool1_adaptation || ''} onChange={handleInputChange} />
                            </div>
                             <div>
                                <label className="font-semibold text-sm text-slate-700">Adaptação da Ferramenta 2:</label>
                                <Input name="c10_tool2_adaptation" value={formData.c10_tool2_adaptation || ''} onChange={handleInputChange} />
                            </div>
                             <div>
                                <label className="font-semibold text-sm text-slate-700">Adaptação da Ferramenta 3 (se houver):</label>
                                <Input name="c10_tool3_adaptation" value={formData.c10_tool3_adaptation || ''} onChange={handleInputChange} />
                            </div>
                            <p className="text-xs text-slate-500 mt-2 italic pt-2">Ex: "Fazer Ritual da Bússola à noite", "Usar Blocos de Foco de 45min", "Aplicar 80/20 só mensalmente no início"</p>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                 <div className="flex items-start">
                    <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                    <div className="flex-1">
                         <p><Strong>4. Integre com o Que Você Já Usa:</Strong> Como você pode aplicar os <Strong>princípios</Strong> MPC (flexibilidade, foco no essencial, aprendizado com erro, ação imperfeita) DENTRO das ferramentas que você já gosta e utiliza (agenda digital, app de tarefas, caderno)?</p>
                         <div className="mt-3 p-3 bg-white border border-dashed rounded-md space-y-2">
                            <div>
                                <label className="font-semibold text-sm text-slate-700">Integração com Ferramenta X:</label>
                                <Input name="c10_integration_x" value={formData.c10_integration_x || ''} onChange={handleInputChange} />
                            </div>
                             <div>
                                <label className="font-semibold text-sm text-slate-700">Integração com Ferramenta Y:</label>
                                <Input name="c10_integration_y" value={formData.c10_integration_y || ''} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Item 5 */}
                <div className="flex items-start">
                    <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                    <div className="flex-1">
                         <p><Strong>5. Planeje a Revisão Contínua (TAE no Sistema!):</Strong> Seu sistema MPC não é estático! Agende um lembrete (semanal ou mensal) para revisar rapidamente: "O que está funcionando? O que não está? Que pequeno ajuste posso fazer no meu sistema MPC?".</p>
                         <div className="mt-2 flex items-center space-x-2">
                            <Checkbox name="c10_review_scheduled" id="c10_review_scheduled" checked={!!formData.c10_review_scheduled} onChange={handleInputChange} />
                            <label htmlFor="c10_review_scheduled" className="text-sm text-slate-700 cursor-pointer">Lembrete de revisão agendado?</label>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-slate-200" />

            <H2>🛠️ Exercício do Capítulo: Seu Plano de Ação Para os Próximos 30 Dias</H2>
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 space-y-6">
                <H3 className="!mt-0 !mb-0 text-violet-800">Template: Meu Plano de Ação MPC - 30 Dias</H3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">Data de Início:</label>
                        <Input name="c10_plan_start_date" value={formData.c10_plan_start_date || ''} onChange={handleInputChange} type="date" />
                    </div>
                     <div>
                        <label className="font-semibold text-sm text-slate-700 block mb-1">Data de Fim (Revisão):</label>
                        <Input name="c10_plan_end_date" value={formData.c10_plan_end_date || ''} onChange={handleInputChange} type="date" />
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">1. Meu Foco Principal MPC (Menos é Mais!):</label>
                    <Textarea name="c10_plan_main_focus" value={formData.c10_plan_main_focus || ''} onChange={handleInputChange} />
                    <p className="text-xs text-slate-500 mt-2 italic">Com base no Checklist acima e na sua reflexão do Bootcamp, qual UM insight, técnica ou mudança de mentalidade trará o MAIOR impacto positivo se praticado consistentemente por 30 dias?</p>
                </div>

                 <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">2. Ações Mínimas e Concretas (Estilo TAE):</label>
                     <Textarea name="c10_plan_min_actions" value={formData.c10_plan_min_actions || ''} onChange={handleInputChange} rows={3} />
                    <p className="text-xs text-slate-500 mt-2 italic">Quais ações PEQUENAS, específicas e realistas você se compromete a fazer DIARIAMENTE ou SEMANALMENTE para praticar esse foco?</p>
                </div>

                 <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">3. Sistema de Lembrete/Responsabilidade Simples:</label>
                    <Textarea name="c10_plan_reminder_system" value={formData.c10_plan_reminder_system || ''} onChange={handleInputChange} />
                    <p className="text-xs text-slate-500 mt-2 italic">Como você vai se lembrar de fazer essas ações? Como vai acompanhar o progresso - mesmo que imperfeito? Mantenha SIMPLES!</p>
                </div>

                 <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">4. Antecipando Obstáculos (Mentalidade Antifrágil):</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                             <label className="font-semibold text-sm text-slate-700">Obstáculo Provável:</label>
                             <Textarea name="c10_plan_obstacle" value={formData.c10_plan_obstacle || ''} onChange={handleInputChange} />
                             <p className="text-xs text-slate-500 mt-1 italic">Ex: "Falta de tempo/cansaço", "Esquecer de fazer", "Voltar ao modo antigo"</p>
                        </div>
                        <div>
                             <label className="font-semibold text-sm text-slate-700">Minha Estratégia MPC para Lidar:</label>
                             <Textarea name="c10_plan_strategy" value={formData.c10_plan_strategy || ''} onChange={handleInputChange} />
                             <p className="text-xs text-slate-500 mt-1 italic">Ex: "Fazer versão de 1 min da Bússola", "Se falhar um dia, voltar no seguinte sem culpa - TAE!", "Revisar o 'porquê' do meu foco"</p>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="font-semibold text-sm text-slate-700 block mb-1">5. Revisão em 30 Dias:</label>
                     <Textarea name="c10_plan_30day_review" value={formData.c10_plan_30day_review || ''} onChange={handleInputChange} />
                    <p className="text-xs text-slate-500 mt-2 italic">O que funcionou? O que não funcionou? Qual o próximo foco?</p>
                </div>
            </div>
        </>
    ),
  },
  {
    id: 11,
    title: "Conclusão: Comece Agora!",
    shortTitle: "Conclusão",
    content: ({ formData, handleInputChange }) => (
      <>
        <Blockquote>
          "A vida não vai ficar mais calma. Mas você pode ficar muito mais potente dentro dela... O caos, agora, está verdadeiramente do seu lado."
        </Blockquote>

        <H3>🎯 Objetivo Desta Etapa:</H3>
        <P>
          Consolidar sua jornada e dar o <Strong>impulso final e imediato</Strong> para a ação. O conhecimento sem aplicação é apenas potencial. Este é o momento de transformar tudo o que você aprendeu e planejou em um <Strong>primeiro passo concreto AGORA</Strong>, selando seu compromisso com a navegação consciente no caos.
        </P>
        
        <hr className="my-8 border-slate-200" />

        <H2>✨ Você Está Pronto(a) Para o Caos!</H2>
        <P>Lembre-se do porquê:</P>
        <UL>
            <LI>Você entende que <Strong>adaptação &gt; controle absoluto</Strong>.</LI>
            <LI>Você vê o <Strong>erro como feedback valioso</Strong>, não como veredicto.</LI>
            <LI>Você descobriu o poder de <Strong>priorizar o essencial (80/20)</Strong>.</LI>
            <LI>Você experimentou a <Strong>abordagem iterativa (TAE)</Strong> para progredir sem perfeição.</LI>
            <LI>Você tem <Strong>ferramentas práticas</Strong> (Ciclo, 3 Passos, 80/20 Planejamento, Rituais).</LI>
            <LI>Você refletiu sobre como sua <Strong>jornada pode gerar conexão e autoridade</Strong>.</LI>
            <LI>Você sabe que a <Strong>flexibilidade e a resiliência (e até a antifragilidade!) vencem a rigidez</Strong> no longo prazo.</LI>
        </UL>
        <P>A Produtividade Caótica não exige perfeição. Exige <Strong>presença, consciência, adaptabilidade e disposição para agir</Strong> em meio à imperfeição.</P>

        <hr className="my-8 border-slate-200" />

        <H2>✅ Checklist Interativo Final: Ação Imediata!</H2>
        <P className="text-sm text-slate-600 mb-6 italic">Foco em ações super pequenas e imediatas para criar momentum AGORA</P>
        
        <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            {/* Item 1 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>1. Escolha UMA Micro-Ação:</Strong> Olhe rapidamente para todos os checklists anteriores (ou seu Plano de 30 Dias). Qual é a <Strong>ação MAIS SIMPLES e RÁPIDA</Strong> que você pode fazer <Strong>AGORA MESMO</Strong> (nos próximos 5-10 minutos) para colocar o MPC em prática?</p>
                    <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Minha Micro-Ação Imediata Escolhida:</label>
                        <Input name="c11_micro_action" value={formData.c11_micro_action || ''} onChange={handleInputChange} />
                        <p className="text-xs text-slate-500 mt-2 italic">Ex: Fazer 1 min de respiração Box Breathing, definir a Prioridade #1 de amanhã, deletar UM app inútil, fazer 5 min da Regra dos 5 Minutos em algo adiado, escrever UM parágrafo "imperfeito", enviar UM e-mail que estava revisando demais.</p>
                    </div>
                </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                    <p><Strong>2. Aja AGORA (Sem Desculpas!):</Strong> Levante-se e realize essa micro-ação escolhida. <Strong>Faça isso antes de fechar esta página ou passar para outra tarefa.</Strong></p>
                    <div className="mt-2 flex items-center space-x-2">
                      <Checkbox name="c11_action_done" id="c11_action_done" checked={!!formData.c11_action_done} onChange={handleInputChange} />
                      <label htmlFor="c11_action_done" className="text-sm text-slate-700 cursor-pointer">Micro-ação realizada?</label>
                    </div>
                </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex items-start">
                <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                     <p><Strong>3. Declare o Começo:</Strong> Diga em voz alta ou escreva aqui: <Strong>"Eu comecei HOJE a aplicar conscientemente o Método da Produtividade Caótica na minha vida."</Strong></p>
                    <div className="mt-2 flex items-center space-x-2">
                      <Checkbox name="c11_declaration_done" id="c11_declaration_done" checked={!!formData.c11_declaration_done} onChange={handleInputChange} />
                      <label htmlFor="c11_declaration_done" className="text-sm text-slate-700 cursor-pointer">Declaração feita.</label>
                    </div>
                </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start">
                 <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                     <p><Strong>4. Micro-Compartilhamento:</Strong> Pense em UMA pessoa (amigo, parceiro(a), colega). Envie uma mensagem rápida dizendo algo como: "Estou explorando umas ideias novas sobre produtividade e caos, te conto depois!". Ou apenas mencione internamente para si mesmo que você deu esse passo.</p>
                     <div className="mt-2 flex items-center space-x-2">
                       <Checkbox name="c11_sharing_done" id="c11_sharing_done" checked={!!formData.c11_sharing_done} onChange={handleInputChange} />
                       <label htmlFor="c11_sharing_done" className="text-sm text-slate-700 cursor-pointer">Micro-compartilhamento feito/intencionado?</label>
                     </div>
                </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start">
                 <div className="text-2xl mr-4 text-slate-400 select-none">☐</div>
                <div className="flex-1">
                     <p><Strong>5. Prepare o Amanhã (Mini-Bússola):</Strong> Reserve os próximos 2-5 minutos. Pegue sua agenda ou bloco de notas. Qual será sua <Strong>Prioridade Essencial #1</Strong> para amanhã? Anote-a onde você a veja ao começar o dia.</p>
                     <div className="mt-3 p-3 bg-white border border-dashed rounded-md">
                        <label className="font-semibold text-sm text-slate-700">Prioridade #1 de Amanhã:</label>
                        <Input name="c11_tomorrow_priority" value={formData.c11_tomorrow_priority || ''} onChange={handleInputChange} />
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <Checkbox name="c11_priority_written" id="c11_priority_written" checked={!!formData.c11_priority_written} onChange={handleInputChange} />
                      <label htmlFor="c11_priority_written" className="text-sm text-slate-700 cursor-pointer">Prioridade anotada?</label>
                    </div>
                </div>
            </div>
        </div>
        
        <hr className="my-8 border-slate-200" />
        
        <H2>🚀 A Jornada Continua...</H2>
        <P>Parabéns por chegar até aqui! Este não é o fim, mas sim o <Strong>verdadeiro começo</Strong> da sua jornada aplicando a Produtividade Caótica.</P>
        <UL>
            <LI><Strong>Revisite esta Central de Ação:</Strong> Use-a como referência e ferramenta contínua.</LI>
            <LI><Strong>Siga seu Plano de 30 Dias:</Strong> A consistência é fundamental.</LI>
            <LI><Strong>Continue Aprendendo e Adaptando:</Strong> O caos muda, e seu sistema também deve evoluir (lembre-se do TAE aplicado ao próprio sistema!).</LI>
            <LI><Strong>Seja Gentil Consigo Mesmo(a):</Strong> Haverá dias bons e dias ruins. Abrace o processo imperfeito.</LI>
        </UL>
        <P>Pegue essas ideias, essas ferramentas, essa nova perspectiva. Leve-as para o seu mundo. Experimente, adapte, aprenda, persista.</P>
        <P><Strong>Agora vá lá. Faça acontecer.</Strong></P>
        
        <Blockquote className="mt-12 text-center text-lg !border-violet-500 !border-l-4 !border-r-0 !border-y-0 italic text-slate-700 font-medium">
          O caos, agora, está verdadeiramente do seu lado. ✨
        </Blockquote>
      </>
    ),
  },
];