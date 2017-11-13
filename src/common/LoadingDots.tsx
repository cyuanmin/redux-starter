import * as React from 'react';

export interface ILoadingDotsProps{
    interval: number;
    dots: number;
}

export interface ILoadingDotsState{
    frame: number;
}

class LoadingDots extends React.Component<ILoadingDotsProps, ILoadingDotsState> {
    private interval: any;
    constructor(props: ILoadingDotsProps){
        super(props);
        this.state = {frame: 1};
    }

    public componentDidMount(): void {
        this.interval = setInterval((): void => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    public render(): JSX.Element {
        let dots: number = this.state.frame % (this.props.dots + 1);
        let text: string = '';
        while (dots > 0){
            text += '.';
            dots--;
        }

        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

export default LoadingDots;