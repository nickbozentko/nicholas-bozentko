import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import SemesterTable from './SemesterTable.jsx'; 

const SemestersList = props => {
    return(
        <Container fluid>
            <Row>
                <Col lg>
                    <SemesterTable
                        title="Fall 2017"
                        classes={[
                            {
                                tag: 'CS201',
                                name: 'Computer Science I',
                                grade: 'A'
                            },
                            {
                                tag: 'MTH231',
                                name: 'Calculus 1',
                                grade: 'A'
                            },
                            {
                                tag: 'PHL210',
                                name: 'Intro to Moral Philosophy',
                                grade: 'A'
                            },
                            {
                                tag: 'ENG120',
                                name: 'Communication Skills: Writing 1',
                                grade: 'A'
                            },
                            {
                                tag: 'COL150',
                                name: 'Columba Cornerstone',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
                <Col lg>
                    <SemesterTable
                        title="Spring 2018"
                        classes={[
                            {
                                tag: 'CS202',
                                name: 'Computer Science II',
                                grade: 'A'
                            },
                            {
                                tag: 'MTH310',
                                name: 'Discrete Mathematics',
                                grade: 'A'
                            },
                            {
                                tag: 'HST101',
                                name: 'Evolution of Western Civilization',
                                grade: 'A'
                            },
                            {
                                tag: 'ENG213',
                                name: 'Transformations',
                                grade: 'A'
                            },
                            {
                                tag: 'FPA230',
                                name: 'Introduction to Acting',
                                grade: 'A'
                            }
                        ]}
                    /> 
                </Col>
            </Row>

            <Row>
                <Col lg>
                    <SemesterTable
                        title="Fall 2018"
                        classes={[
                            {
                                tag: 'CS301',
                                name: 'Data Structures and Algorithms',
                                grade: 'A'
                            },
                            {
                                tag: 'CS321',
                                name: 'Database Design and Implementation',
                                grade: 'A'
                            },
                            {
                                tag: 'MTH232',
                                name: 'Calculus 2',
                                grade: 'A'
                            },
                            {
                                tag: 'CS498',
                                name: 'CS Internship',
                                grade: 'A'
                            },
                            {
                                tag: 'ECO201',
                                name: 'Basic Microeconomic Analysis',
                                grade: 'A'
                            }
                        ]}
                    /> 
                </Col>
                <Col lg>
                    <SemesterTable
                        title="Spring 2019"
                        classes={[
                            {
                                tag: 'CS311',
                                name: 'Computer Architecture and Organization',
                                grade: 'A'
                            },
                            {
                                tag: 'CS231',
                                name: 'Programming in a UNIX Environment',
                                grade: 'A'
                            },
                            {
                                tag: 'MTH432',
                                name: 'Probability and Statistics',
                                grade: 'A'
                            },
                            {
                                tag: 'RST208',
                                name: 'Ethics and Morality',
                                grade: 'A'
                            },
                            {
                                tag: 'ENT200',
                                name: 'Intro to Entrepreneurship',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg>
                    <SemesterTable
                        title="Fall 2019"
                        classes={[
                            {
                                tag: 'CS451',
                                name: 'Operating Systems',
                                grade: 'A'
                            },
                            {
                                tag: 'CS444',
                                name: 'Web Applications Development',
                                grade: 'A'
                            },
                            {
                                tag: 'CS434',
                                name: 'Game Development',
                                grade: 'A'
                            },
                            {
                                tag: 'PHY101',
                                name: 'General Physics I',
                                grade: 'A'
                            },
                            {
                                tag: 'FPA202',
                                name: 'Music Appreciation',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
                <Col lg>
                    <SemesterTable
                        title="Spring 2020"
                        classes={[
                            {
                                tag: 'MTH408',
                                name: 'Automata and Formal Languages',
                                grade: 'A'
                            },
                            {
                                tag: 'MTH236',
                                name: 'Introduction to Proof',
                                grade: 'A'
                            },
                            {
                                tag: 'PHY202',
                                name: 'General Physics II',
                                grade: 'A'
                            },
                            {
                                tag: 'SPA150',
                                name: 'Beginning Hispanic Culture',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg>
                    <SemesterTable
                        title="Fall 2020"
                        classes={[
                            {
                                tag: 'CS473',
                                name: 'Mobile Application Development',
                                grade: 'A'
                            },
                            {
                                tag: 'CS481',
                                name: 'Software Development: Design',
                                grade: 'A'
                            },
                            {
                                tag: 'PHY323',
                                name: 'Modern Physics I',
                                grade: 'A'
                            },
                            {
                                tag: 'PHY300',
                                name: 'Mathematical Mechanics I',
                                grade: 'A'
                            },
                            {
                                tag: 'PHL365',
                                name: 'Philosophy of Science',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
                <Col lg>
                    <SemesterTable
                        title="Spring 2021"
                        classes={[
                            {
                                tag: 'CS465',
                                name: 'Data Mining',
                                grade: 'A'
                            },
                            {
                                tag: 'CS482',
                                name: 'Software Development: Implementation',
                                grade: 'A'
                            },
                            {
                                tag: 'CS331',
                                name: 'Theory of Programming Languages',
                                grade: 'A'
                            },
                            {
                                tag: 'BUS130',
                                name: 'The Legal Environment of Business',
                                grade: 'A'
                            }
                        ]}
                    />
                </Col>
            </Row>

        </Container>
    )
}

export default SemestersList;