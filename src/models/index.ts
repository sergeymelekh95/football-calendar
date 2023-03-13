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

export interface Stage2 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season2 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: Date;
	endingAt?: Date;
	sortIdx: number;
	champ_id: number;
	stages: Stage2[];
}

export interface Champ2 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	seasons: Season2[];
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
	champs: Champ2[];
}

export interface Stage3 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season3 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: any;
	endingAt?: any;
	sortIdx: number;
	champ_id: number;
	stages: Stage3[];
}

export interface Champ {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	country: Country;
	seasons: Season3[];
	windowSchedulerEnabled: boolean;
	windowSchedulerDayFrom: number;
	windowSchedulerTimeFrom: string;
	windowSchedulerDayTo: number;
	windowSchedulerTimeTo: string;
	windowSchedulerTimezoneOffset: number;
	disqualEnabled: boolean;
	disqualYC: number;
}

export interface Stage4 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: any;
	endingAt?: any;
	sortIdx: number;
	champ_id: number;
	champ: Champ;
	stages: Stage4[];
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

export interface City2 {
	_id: number;
	name: string;
	flag: string;
	show: boolean;
	sortIdx: number;
}

export interface Client2 {
	_id: number;
	key: string;
	name: string;
}

export interface League2 {
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
	city: City2;
	client: Client2;
}

export interface Stage5 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season5 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: Date;
	endingAt?: Date;
	sortIdx: number;
	champ_id: number;
	stages: Stage5[];
}

export interface Champ4 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	seasons: Season5[];
}

export interface Country2 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	flag: string;
	league_id: number;
	socialVk?: any;
	socialFb?: any;
	socialIg?: any;
	league: League2;
	champs: Champ4[];
}

export interface Stage6 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season6 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: any;
	endingAt?: any;
	sortIdx: number;
	champ_id: number;
	stages: Stage6[];
}

export interface Champ3 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	country: Country2;
	seasons: Season6[];
	windowSchedulerEnabled: boolean;
	windowSchedulerDayFrom: number;
	windowSchedulerTimeFrom: string;
	windowSchedulerDayTo: number;
	windowSchedulerTimeTo: string;
	windowSchedulerTimezoneOffset: number;
	disqualEnabled: boolean;
	disqualYC: number;
}

export interface Stage7 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season4 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: any;
	endingAt?: any;
	sortIdx: number;
	champ_id: number;
	champ: Champ3;
	stages: Stage7[];
}

export interface City3 {
	_id: number;
	name: string;
	flag: string;
	show: boolean;
	sortIdx: number;
}

export interface Client3 {
	_id: number;
	key: string;
	name: string;
}

export interface League3 {
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
	city: City3;
	client: Client3;
}

export interface Stage8 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season7 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: Date;
	endingAt?: Date;
	sortIdx: number;
	champ_id: number;
	stages: Stage8[];
}

export interface Champ6 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	seasons: Season7[];
}

export interface Country3 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	flag: string;
	league_id: number;
	socialVk?: any;
	socialFb?: any;
	socialIg?: any;
	league: League3;
	champs: Champ6[];
}

export interface Stage9 {
	_id: number;
	name: string;
	format: string;
	sortIdx: number;
	show: boolean;
	season_id: number;
}

export interface Season8 {
	_id: number;
	name: string;
	show: boolean;
	inProgress: boolean;
	startingAt?: any;
	endingAt?: any;
	sortIdx: number;
	champ_id: number;
	stages: Stage9[];
}

export interface Champ5 {
	_id: number;
	name: string;
	show: boolean;
	sortIdx: number;
	country_id: number;
	country: Country3;
	seasons: Season8[];
	windowSchedulerEnabled: boolean;
	windowSchedulerDayFrom: number;
	windowSchedulerTimeFrom: string;
	windowSchedulerDayTo: number;
	windowSchedulerTimeTo: string;
	windowSchedulerTimezoneOffset: number;
	disqualEnabled: boolean;
	disqualYC: number;
}

export interface City4 {
	_id: number;
	name: string;
	flag: string;
	show: boolean;
	sortIdx: number;
}

export interface Client4 {
	_id: number;
	key: string;
	name: string;
}

export interface League4 {
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
	city: City4;
	client: Client4;
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
	season: Season4;
	champ: Champ5;
	league: League4;
	teamHome: TeamHome;
	teamAway: TeamAway;
	pitch: Pitch;
}

export interface ServerResponseItems {
	total: number;
	items: Item[];
}
