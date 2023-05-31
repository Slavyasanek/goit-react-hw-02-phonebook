import { Component } from "react";
import { SectionWrapper } from "./Section.styled";

class Section extends Component {
    render() {
        const {sectionType, title, children } = this.props;
        return (
            <SectionWrapper sectionType={sectionType}>
                {title === 'Phonebook' ? (<h1>{title}</h1>) : (<h2>{title}</h2>)}
                {children}
            </SectionWrapper>
        );
    }
}

export default Section;