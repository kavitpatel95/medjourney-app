import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hleehstnarlmdkkohict.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWVoc3RuYXJsbWRra29oaWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NTIzODUsImV4cCI6MjA3MDAyODM4NX0.gBlftqYxOZqPtdwelizjeS_L8rBmsUnz0TmfGkKBfhs';

export const supabase = createClient(supabaseUrl, supabaseKey);
