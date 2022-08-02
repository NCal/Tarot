import React, {Component} from 'react';
import { Link } from "react-router";

const Instructions = (props) => {
    return (
      <div className="main-content">
        <br />
        <h2 className="title">Instructions</h2>
        <img
          className="card_image"
          src={"https://s3.amazonaws.com/tarot.lol/assets/45_Pents10.jpg"}
          alt="Instructions page image, the 10 of Pentacles Tarot Card"
        />
        <h3>Step 1</h3>
        <p>
          The first step in a tarot reading is deciding whether or not to ask a
          question.
        </p>

        <p>
          If you decide to, you can ask your question silently in your mind or
          out loud.
        </p>
        <p>
          If you don’t have a specific question, you may simply ask “what do I
          need to know right now?” or “What messages do you have for me today?”
        </p>

        <p>
          However, the more detailed the question, the more accurate the answer.
          A vague question will invite a vague answer.
        </p>
        <br />

        <h3>Step 2</h3>
        <p>Focus intently on your question, then choose your cards.</p>

        <p>There are two options for a reading : </p>
        <h4>
          <Link to={"/full-reading"}> Full Reading </Link>(which will go into
          much more detail)
        </h4>
        <i>Or</i>
        <h4
          style={{
            borderBottom: "1px solid #555",
            paddingBottom: "20px",
            marginBottom: 0,
          }}
        >
          <Link to={"/single-card-reading"}> Single Card Reading </Link>
          (which returns one card only).
        </h4>
        {/* <p>
          In the opening screen, enter your question in the text-box. You don't
          NEED to enter a question. Writing it down is optional, but it helps
          your concentration on the issue if you formulate it in written form.
          It will help you get your topic "in-the-air". And it helps for
          printing purposes as well; you will better remember the reading when
          you print the answer together with the question, on paper. When the
          page is closed, the question is gone into cyberspace. Unless you save
          your reading in your personal account, of course, but then it is
          obvious that you write it down. And even if you don't, you can still
          edit the question in your saved reading.
        </p> */}

        <img
          className="break-image"
          src={"https://s3.amazonaws.com/tarot.lol/assets/2.png"}
          alt="Two interwoven rings, a design element denoting the end of page content"
        />
      </div>
    );
}

export default Instructions;