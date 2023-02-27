import React from "react";

function List(props) {
    return (

        <section>
            <div className="section1">
                <div className="sec1-p1 hr">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" className="ih y">
                        <path fill="#fff" d="M0 .8h28v28H0z"></path>
                        <g opacity="0.8" clipPath="url(#trending_svg__clip0)">
                            <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                            <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                            <path
                                d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                                stroke="#000" strokeLinecap="round"></path>
                        </g>
                        <defs>
                            <clipPath id="trending_svg__clip0">
                                <path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <h2 id="tread">{props.head}</h2>
                    <div className="parent">
                        <div className="child1">
                            <p id="first">{props.num}</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img1.jpeg" className="images" alt='img' /><span id="para1">Praveen Seshadri</span></p>
                            <h4 id="h4">The maze is in the mouse</h4>
                            <p id="para2">Feb 14 · 15 min read</p>

                        </div>
                    </div>
                    <div className="parent">
                        <div className="child1">
                            <p id="first">04</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img4.jpeg" className="images" alt='img' /><span id="para1">Brandon Van Der Heide</span></p>
                            <h4 id="h4">There is a crack in everything</h4>
                            <p id="para2">Feb 14 · 5 min read</p>

                        </div>
                    </div>

                </div>
                <div className="sec1-p2 hr">
                    <div className="parent">
                        <div className="child1">
                            <p id="first">02</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img2.jpeg" className="images" alt='img' /><span id="para1">Mohamed Aboelez
                                in
                                Level Up Coding</span></p>
                            <h4 id="h4"> The maze is in the mouse </h4>
                            <p id="para2">Feb 20
                                ·
                                4 min read
                            </p>

                        </div>
                    </div>
                    <div className="parent">
                        <div className="child1">
                            <p id="first">05</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img6.png" className="images" alt='img' /><span id="para1">Emily Kingsley
                                in
                                Human Parts</span></p>
                            <h4 id="h4">You Are Not Okay and Tomorrow Will Come</h4>
                            <p id="para2">Feb 9 · 3 min read</p>

                        </div>
                    </div>

                </div>
                <div className="sec1-p3 hr">
                    <div className="parent">
                        <div className="child1">
                            <p id="first">03</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img3.jpeg" className="images" alt='img' /><span id="para1">Tom Cooper
                            </span></p>
                            <h4 id="h4">Ukraine War, 19 February 2023: Bakhmut</h4>
                            <p id="para2">Feb 19 · 3 min read</p>

                        </div>
                    </div>
                    <div className="parent">
                        <div className="child1">
                            <p id="first">06</p>
                        </div>
                        <div className="child2">
                            <p><img src="asscets/images/img5.jpeg" className="images" alt='img' /><span id="para1">Wes O'Donnell</span></p>
                            <h4 id="h4">The Small U.S. Weapon That’s Making Life Miserable for Russia in Ukraine

                            </h4>
                            <p id="para2">Feb 15 · 3 min read</p>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}


export default List;