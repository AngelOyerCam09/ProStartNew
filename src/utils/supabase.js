import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqnumeyvvzobabpwgqkj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxbnVtZXl2dnpvYmFicHdncWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjM3MDQsImV4cCI6MjA3NDQ5OTcwNH0.IeVzR21YMfb5p5xhsyGIc3gPBpDdZzWS6p6OyKbYda8';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Función para subir CV (estudiantes)
export const uploadCV = async (file) => {
  if (!file) return null;
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `cvs/${fileName}`;

  try {
    const { data, error } = await supabase.storage
      .from('cvs')
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('cvs')
      .getPublicUrl(filePath);

    return { path: filePath, url: publicUrl };
  } catch (error) {
    console.error('Error subiendo CV:', error);
    return null; // Fallback: no bloquear flujo
  }
};

// Función para subir constancia fiscal (empresas)
export const uploadFiscalProof = async (file) => {
  if (!file) return null;
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `fiscal/${fileName}`;

  try {
    const { data, error } = await supabase.storage
      .from('fiscal')
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('fiscal')
      .getPublicUrl(filePath);

    return { path: filePath, url: publicUrl };
  } catch (error) {
    console.error('Error subiendo constancia:', error);
    return null; // Fallback: no bloquear flujo
  }
};