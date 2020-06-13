import Player from "./Player";
import PlayerProps from "../PlayerProps/PlayerProps";

class PlayerImpl implements Player {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _prop: PlayerProps;

    constructor(name: string, prop: PlayerProps) {
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._name = name;
        this._prop = prop
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get prop(): PlayerProps {
        return this._prop;
    }
}

export default PlayerImpl;