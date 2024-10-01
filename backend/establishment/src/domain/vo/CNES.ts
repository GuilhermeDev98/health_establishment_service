export class CNES {
    private readonly value: string;
  
    constructor(value: string) {
      if (!CNES.isValid(value)) {
        throw new Error('CNES inválido');
      }
      this.value = value;
    }
  
    public static isValid(cnes: string): boolean {
      // Remove caracteres não numéricos
      const sanitizedCNES = cnes.replace(/[^\d]/g, '');
  
      // CNES deve ter 7 dígitos
      if (sanitizedCNES.length !== 7) {
        return false;
      }
  
      // Validação básica (neste caso, apenas checa se é numérico e tem 7 dígitos)
      // Aqui, pode-se adicionar uma lógica mais robusta se necessário
      return /^\d{7}$/.test(sanitizedCNES);
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  