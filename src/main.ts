import { App, Plugin, PluginSettingTab, Setting } from "obsidian";

import { DataviewPage } from "./DataviewInterfaces";
import { clusterByTags as _clusterByTags } from "./TagClustering";

export default class PageExplorerPlugin extends Plugin {
  async onload() {}

  async onunload() {}

  async loadSettings() {}

  async saveSettings() {}

  public clusterByTags(
    pages: DataviewPage[],
    epsilon: number,
    ignorableTags: string[]
  ) {
    return _clusterByTags(pages, epsilon, ignorableTags);
  }

}