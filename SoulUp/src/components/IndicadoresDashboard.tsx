function CardIndicador({ icone, valor, descricao }: { icone: string; valor: string; descricao: string }) {
  return (
    <article className="rounded-3xl bg-white px-4 py-8 text-center shadow-sm">
      <span aria-hidden="true" className="text-3xl">{icone}</span>
      <p className="mt-4 text-2xl sm:text-3xl font-bold text-teal-500">{valor}</p>
      <h2 className="mt-3 text-sm font-normal text-slate-500">{descricao}</h2>
    </article>
  );
}
interface Props {
  pontos: number;
  acoes: number;
  posicao: number;
  faltam: number;
}

export default function IndicadoresDashboard({ pontos, acoes, posicao, faltam }: Props) {
  const indicadores = [
    { icone: "⭐", valor: pontos.toLocaleString("pt-BR"), descricao: "Pontos totais" },
    { icone: "📊", valor: `#${posicao}`, descricao: "Posição no ranking" },
    { icone: "🎯", valor: String(faltam), descricao: "Pontos para o próximo nível" },
    { icone: "✅", valor: String(acoes), descricao: "Ações registradas" },
  ];
  return <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">{indicadores.map((item) => <CardIndicador key={item.descricao} {...item} />)}</div>;
}
