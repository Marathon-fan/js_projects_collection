import React from 'react';
import { QuestionContainer, RadioSelect, FormButton, Heading, NavLink } from 'components/funcGroup1';
import { connect } from 'react-redux';
import { selectApplicantFromSfid } from 'containers/funcGroup2/selector/applicants';

class PreviousEmploymentQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: false
    };
  }

  onClickNext_FormButton = () => {};
  onClickBack_NavLink = () => {};
  optionList_RadioSelect = () => [{ label: 'Yes, I have', value: true }, { label: "No, that's it", value: false }];
  onChange_RadioSelect = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };
  getHeading = () => {
    const part1 = this.props.applicant.applicant_type === 'primary' ? 'Have you ' : `Has ${this.state.applicantName} `;  // the data has been mapped from redux to local props, and we can read it(this.props.applicant..) directly
    const part2 = 'been employed anywhere else in the past 3 years?';
    return part1 + part2;
  };

  render() {
    console.log('props', this.props); // for deployment
    return (
      <QuestionContainer>
        <Heading text={this.getHeading()} />
        <RadioSelect
          onChange={(e) => {
            this.onChange_RadioSelect(e);
          }}
          optionList={this.optionList_RadioSelect()}
          value={this.state.answer}
          disabled={false}
        />
        <br />
        <FormButton text="Next" onClick={this.onClickNext_FormButton} />
        <NavLink text="Back" onClick={this.onClickBack_NavLink} />
      </QuestionContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  const sfid = props.params.applicant_sfid;
  const applicant = selectApplicantFromSfid(sfid)(state);
  return {
    applicant,
    sfid
  };
};

export default connect(mapStateToProps)(PreviousEmploymentQuestion);  
// every time it renders, the func mapStateToProps will execute automatically
// connect always returns a function. So we need to assign the returned function to some variable or const

