import React from 'react';
import { connect } from 'react-redux';
import { setStartEmail } from '../actions/index';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    this.props.setStartEmail(email);
    this.props.history.push('/register')
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <main role="main">
        <div className="mainBox">
          <div className="mainInnerBox">
            <h1 className="mainInnerBoxHeader">Track your volunteer hours</h1>
            <p className="mainInnerBoxSubtitle">VolunteerTrack makes tracking volunteer time easy by providing a fast, simple way for your volunteers to log their
              activities.
                </p>
            <form id="frmQuickStart" onSubmit={this.handleSubmit}>
              <fieldset>
                <input value={this.state.value} onChange={this.handleChange} type="email" id="email" placeholder="Email Address" className="text-input" />
                <button className="btnGetStarted btnStandard">Get Started</button>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setStartEmail })(Home);
