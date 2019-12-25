import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        userCount: 0,
        totalSubmissions: 0,
        minutesSaved: 0,
    });

    useEffect(() => {
        fetch("https://sponsor.ajay.app/api/getTotalStats")
            .then(response => response.json())
            .then(resultData => setTotalStats(resultData));
    }, []);

    return (
        <Layout>
            <SEO title="Home" />

            <div
                style={{
                    backgroundColor: "rgb(38, 38, 38)",
                    padding: "5rem 1rem",
                    textAlign: "center",
                    fontSize: "4rem",
                }}
            >
                <img
                    src="/LogoSponsorBlock256px.png"
                    style={{
                        marginRight: "3rem",
                        verticalAlign: "middle",
                        maxHeight: "150px",
                    }}
                    alt="Logo"
                />
                <span style={{ color: "white" }}>SponsorBlock</span>
            </div>

            <div className="container">
                <div className="text-large">
                    <p>
                        SponsorBlock is a crowdsourced browser extension to
                        block sponsor segments of YouTube videos. Users submit
                        when a sponsor happens from the extension, and the
                        extension automatically skips sponsors it knows about.
                        It also features an upvote/downvote system with a{" "}
                        <a href="https://ajay.app/blog.html#voting-and-pseudo-randomness-or-sponsorblock-or-youtube-sponsorship-segment-blocker">
                            weighted random based distribution algorithm
                        </a>
                        .
                    </p>

                    <div className="text-center">
                        <h2>Download the extension</h2>

                        <a href="https://chrome.google.com/webstore/detail/mnjggcdmjocbbbhaepdhchncahnbgone">
                            <img
                                src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a
                            href="https://addons.mozilla.org/addon/sponsorblock?src=external-website"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Opera"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/opera.png" alt="Download for Opera" />
                        </a>

                        <h3>Unofficial ports</h3>

                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/Unofficial-Ports#mpv-media-player">
                            <img src="/mpv.png" alt="Download for MPV" />
                        </a>
                    </div>
                </div>

                <p className="quote">
                    There are currently <strong>{totalStats.userCount}</strong>{" "}
                    users who have submitted{" "}
                    <strong>{totalStats.totalSubmissions}</strong> sponsors,
                    which have saved a total of{" "}
                    <strong>
                        {(totalStats.minutesSaved / 60 / 24).toFixed(2)}
                    </strong>{" "}
                    days of people's lives.
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;