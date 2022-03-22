import { UiButton } from "./UIComponents/Button";
import type { App } from "vue";

const components = [
    UiButton
]

export default function(app: App) {
    components.forEach(component => {
        app.use(UiButton)
    })
    
}
