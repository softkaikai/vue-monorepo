import type { Plugin, Component, App } from "vue";

export type ComponentWithName = Component & { name: string };
export type MarketPlugin = ComponentWithName & Plugin

export function withInstall(
  component: ComponentWithName
): MarketPlugin {
  return {
    ...component,
    install(app: App) {
      app.component(component.name, component);
    },
  };
}
