import * as React from 'react';

export interface ILoadingDotsProps{
    interval: number;
    dots: number;
}

export interface ILoadingDotsState{
    frame: number;
}

class LoadingDots extends React.Component<ILoadingDotsProps, ILoadingDotsState> {
    private timerInterval: any;
    constructor(props: ILoadingDotsProps){
        super(props);
        this.state = {frame: 1};
    }

    public componentDidMount(): void {
        this.timerInterval = setInterval((): void => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    public componentWillUnmount(): void {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
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