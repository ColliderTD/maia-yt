import { PlayerConfig, PlayerData } from "../app/youtube/PlayerConfig";
import { Player } from "../app/player/Player";
import { PageNavigationDetail } from "../app/youtube/PageNavigationDetail";
import { ISettingsReact } from "../settings/ISettings";

export interface onPlayerConfig {
  onPlayerConfig(player: Player, config: PlayerConfig): PlayerConfig;
}

export interface onPlayerBeforeCreated {
  onPlayerBeforeCreated(player: Player): void;
}

export interface onPlayerCreated {
  onPlayerCreated(player: Player): void;
}

export interface onPlayerReady {
  onPlayerReady(player: Player): void;
}

export interface onPlayerData {
  onPlayerData(player: Player, data: PlayerData): PlayerData;
}

export interface onPageNavigationFinish {
  onPageNavigationFinish(detail: PageNavigationDetail): void;
}

export interface onSettingsReactRegister {
  onSettingsReactRegister(): ISettingsReact;
}

export interface onPlayerApiCall {
  onPlayerApiCall(player: Player, name: string, ...args: any[]): onPlayerApiCallResponse|undefined|void;
}

export interface onPlayerApiCallResponse {
  value: any;
}