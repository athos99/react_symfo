import React, {Component} from 'react';

export default class Tableau extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null
        };
    }

    handleRowClick(repLogId, event) {
        console.log('Tableau an onClick!');
        this.setState({highlightedRowId: repLogId});
    }

    render() {
        const {highlightedRowId} = this.state;
        const {withHeart} = this.props;
        const repLogs = [
            {id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5},
            {id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180},
            {id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72}
        ];
        let heart = '';
        if (withHeart) {
            heart = <span>❤️</span>;
        }
        return (
            <div className="col-md-7 js-rep-log-table">
                <h2>Lift Stuff! {heart}</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>What</th>
                        <th>How many times?</th>
                        <th>Weight</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {repLogs.map((repLog) =>
                        <tr key={repLog.id}
                            className={highlightedRowId === repLog.id ? 'bg-success p-2 text-dark bg-opacity-25' : ''}
                            onClick={(event) => this.handleRowClick(repLog.id, event)}>
                            <td>{repLog.itemLabel}</td>
                            <td>{repLog.reps}</td>
                            <td>{repLog.totalWeightLifted}</td>
                            <td>...</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>&nbsp;</td>
                        <th>Total</th>
                        <th className="js-total-weight"></th>
                        <td>&nbsp;</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}