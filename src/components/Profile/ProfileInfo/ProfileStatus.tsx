import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

type OwnPropsType = ProfileStatusPropsType

export class ProfileStatus extends React.Component<OwnPropsType> {
  state = {
    editMode: false,
    status: this.props.status
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
      status: this.props.status,
    })
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  };

  componentDidUpdate(prevProps: OwnPropsType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode
            ? <div>
              <span
                onDoubleClick={this.activatedEditMode}>
                {this.props.status || '======'}
              </span>
            </div>
            : <div>
              <input onChange={this.onStatusChange}
                     autoFocus={true}
                     onBlur={this.deactivatedEditMode}
                     value={this.state.status}/>
            </div>
        }
      </div>
    );
  }
}
