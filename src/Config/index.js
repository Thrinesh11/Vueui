export default {
    API_URL: 'https://625db26d0037.ngrok.io', // <- enter your API URL here
    muted: false, // <- mute microphone at start
    start_suggestions: [], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}