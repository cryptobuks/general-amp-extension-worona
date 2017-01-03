import React from 'react';

const AMP = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-body">
        <h1 className="title">Google AMP</h1>
        <h2 className="subtitle">
          AMP is a way to build web pages for static content that render fast.
        </h2>
        <br />
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <article className="message is-info">
              <div className="message-header">
                Coming Soon
              </div>
              <div className="message-body">
                We are working to integrate more channels so you can distribute your content easily on mobile.
                <br /><br />
                If you want to learn more about Google AMP you can take a look to their <a target="_blank" href="https://www.ampproject.org" rel="noopener noreferrer">official site</a>,&nbsp;
                <a target="_blank" href="https://www.ampproject.org/docs/support/faqs.html" rel="noopener noreferrer">the FAQs</a> or their <a href="https://www.ampproject.org/docs/get_started/about-amp.html" target="_blank" rel="noopener noreferrer">Getting started</a> guide.
                <br /><br /><br />
                <p className="control">
                  <label className="checkbox" htmlFor="notifyMeFbia">
                    <input id="notifyMeFbia" type="checkbox" />
                    &nbsp;<strong>Please notify me when you launch.</strong>
                  </label>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AMP;
