import type { ErroApi } from "../types/api";

// URL da API Java: vem só do .env (VITE_API_URL), sem URL fixa no código
const API_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/+$/, "");

// Erro com o status HTTP que a API devolveu (404, 409, 400...)
export class ApiError extends Error {
  status: number;

  constructor(status: number, mensagem: string) {
    super(mensagem);
    this.status = status;
    this.name = "ApiError";
  }
}

// Função única para chamar a API com fetch
export async function requisicao<T>(caminho: string, opcoes: RequestInit = {}): Promise<T> {
  if (!API_URL) {
    throw new ApiError(0, "A URL da API não foi configurada (VITE_API_URL no arquivo .env).");
  }
  let resposta: Response;
  try {
    resposta = await fetch(`${API_URL}${caminho}`, {
      ...opcoes,
      headers: opcoes.body ? { "Content-Type": "application/json" } : undefined,
    });
  } catch {
    throw new ApiError(0, "Não foi possível conectar à API. Tente novamente em instantes.");
  }

  // DELETE devolve 204 sem corpo
  if (resposta.status === 204) return undefined as T;

  const corpo: unknown = await resposta.json().catch(() => null);
  if (!resposta.ok) {
    const erro = corpo as ErroApi | null;
    throw new ApiError(resposta.status, erro?.mensagem ?? "Erro inesperado na API.");
  }
  return corpo as T;
}
