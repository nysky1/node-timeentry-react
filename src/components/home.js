import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <main role="main">
            <div className="mainBox">
              <div className="mainInnerBox">
                <h1 className="mainInnerBoxHeader">Track your volunteer hours</h1>
                <p className="mainInnerBoxSubtitle">VolunteerTrack makes tracking volunteer time easy by providing a fast, simple way for your volunteers to log their
                  activities.
                </p>
                <form id="frmQuickStart">
                  <fieldset>
                    <input id="email" value="" placeholder="Email Address" aria-label="Enter your Email Address" className="text-input" />
                    <button className="btnGetStarted btnStandard">Get Started</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </main>
        )
    }
}
