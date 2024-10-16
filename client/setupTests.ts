// Importações necessárias para configurar o ambiente de teste com Vitest
import { expect } from 'vitest';
import { config } from '@vue/test-utils';

// Configurações globais para o Vue Test Utils, se necessário
config.global.mocks = {
  // Adicione mocks globais aqui, se necessário
};

// Configurações globais para o Vitest, se necessário
expect.extend({
  // Adicione extensões personalizadas para expect aqui, se necessário
});