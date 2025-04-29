import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://ycolgpuvuekoyytpftge.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inljb2xncHV2dWVrb3l5dHBmdGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NjYyNDAsImV4cCI6MjA2MTU0MjI0MH0.xAIQt8Or3f5DznddeauIWsrmYPz10zxb8UxkAS6gtOY"
);
