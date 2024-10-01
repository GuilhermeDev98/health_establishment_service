export class CNPJ {
    private readonly value: string;
  
    constructor(value: string) {
      console.log("CNPJ", value)
      if (!CNPJ.isValid(value)) {
        throw new Error('CNPJ inválido');
      }
      this.value = CNPJ.format(value);
    }
  
    public static isValid(cnpj: string): boolean {
      // Remove caracteres não numéricos
      const sanitizedCNPJ = cnpj.replace(/[^\d]/g, '');
  
      if (sanitizedCNPJ.length !== 14) return false;
  
      // Validação do CNPJ
      let length = sanitizedCNPJ.length - 2;
      let numbers = sanitizedCNPJ.substring(0, length);
      const digits = sanitizedCNPJ.substring(length);
      let sum = 0;
      let pos = length - 7;
      for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
      }
      let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (result !== parseInt(digits.charAt(0))) return false;
  
      length = length + 1;
      numbers = sanitizedCNPJ.substring(0, length);
      sum = 0;
      pos = length - 7;
      for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--;
        if (pos < 2) pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (result !== parseInt(digits.charAt(1))) return false;
  
      return true;
    }
  
    public static format(cnpj: string): string {
      // Formata o CNPJ para o padrão XX.XXX.XXX/XXXX-XX
      return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }
  
    public getValue(): string {
      return this.value;
    }
  
    public equals(cnpj: CNPJ): boolean {
      return this.value === cnpj.getValue();
    }
  }
  