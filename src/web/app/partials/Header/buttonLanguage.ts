import {ref} from "vue";

const selectedLanguage = ref('PT');

export function useLanguage() {
    const languages = [
        {code: 'PT', label: 'Português'},
        {code: 'EN', label: 'English'},
        {code: 'ES', label: 'Español'}
    ]

    function selectLanguage(code: string) {
        selectedLanguage.value = code
    }

    return {
        selectedLanguage,
        languages,
        selectLanguage
    }
}
