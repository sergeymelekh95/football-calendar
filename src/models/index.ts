export interface Stadium {
	_id: number;
	name: string;
	address: string;
	pitchSize?: any;
	photoId?: number;
	league_id: number;
}

export interface City {
	_id: number;
	name: string;
	flag: string;
	show: boolean;
	sortIdx: number;
}

export interface Client {
	_id: number;
	key: string;
	name: string;
}

export interface League {
	_id: number;
	name: string;
	sports: string;
	show: boolean;
	sortIdx: number;
	city_id: number;
	linkVk: string;
	linkFb?: any;
	linkWeb: string;
	linkIg: string;
	client_id: number;
	city: City;
	client: Client;
}

export interface Stage {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
	season: Season;
}

export interface Season {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: Date;
	endingAt?: Date;
	sortIdx: number;
	champ_id: number;
	stages: Stage[];
}

export interface Country {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	flag: string;
	league_id: number;
	socialVk?: any;
	socialFb?: any;
	socialIg?: any;
	league: League;
	champs: Champ[];
}

export interface Champ {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	country: Country;
	seasons: Season[];
	windowSchedulerEnabled: boolean;
	windowSchedulerDayFrom: number;
	windowSchedulerTimeFrom: string;
	windowSchedulerDayTo: number;
	windowSchedulerTimeTo: string;
	windowSchedulerTimezoneOffset: number;
	disqualEnabled: boolean;
	disqualYC: number;
}

export interface TeamHome {
	_id: number;
	name: string;
	shortName: string;
	logo: string;
	logoId: number;
	color: string;
	league_id: number;
	parentTeam_id?: any;
	reserveTeam_id?: any;
}

export interface TeamAway {
	_id: number;
	name: string;
	shortName: string;
	logo: string;
	logoId: number;
	color?: any;
	league_id: number;
	parentTeam_id?: any;
	reserveTeam_id?: number;
}

export interface Pitch {
	_id: number;
	name: string;
	photoId: number;
	stadium_id: number;
}

export interface Item {
	_id: number;
	date: Date;
	tourNumber: number;
	netPosition?: any;
	techDefeat: boolean;
	scoreFtHome: number;
	scoreFtAway: number;
	scorePenHome?: number;
	scorePenAway?: number;
	partsScoreHome: string;
	partsScoreAway: string;
	stateCode: number;
	homeLineupMarked: boolean;
	awayLineupMarked: boolean;
	stadium: Stadium;
	stage: Stage;
	season: Season;
	champ: Champ;
	league: League;
	teamHome: TeamHome;
	teamAway: TeamAway;
	pitch: Pitch;
}

export interface ServerResponseItems {
	total: number;
	items: Item[];
}
