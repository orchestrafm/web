import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { Button } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulmaswatch/cyborg/bulmaswatch.min.css';

function TrackCard({id, title, artists}) {
    useEffect(() => {
        fetchBoardsFromTrack();
    }, []);

    const [boards, setBoards] = useState([]);

    const fetchBoardsFromTrack = async () => {
        const req = await axios.get(`http://localhost:1000/api/v0/board/track/${id}`);

        const boards = await req.data;
        setBoards(boards);
    }

    const NoviceButton = styled(Button)`
        background-color: #6515ea;
    `

    const MaximumButton = styled(Button)`
        background-color: #FFFFFF;
        color: #000000;
    `

    const GravityButton = styled(Button)`
        background-color: #ff8000;
    `

    const HeavenlyButton = styled(Button)`
        background-color: #ceffff;
        color: #000000;
    `

    const VividButton = styled(Button)`
        background-color: #ffbae7;
    `

    return (
        <div
        className="card is-horizontal"
        >
            <div
            className="card-image is-horizontal"
            >
                <figure
                className="image is-320x180 is-horizontal"
                >
                    <img
                    src="https://via.placeholder.com/320x180.webp"
                    alt="Placeholder image"
                    />
                </figure>
            </div>
            <div
            className="card-content is-horizontal"
            >
                <div
                className="media-content"
                >
                    <p
                    className="title is-4"
                    >
                    {title}
                    </p>
                    <p
                    className="subtitle is-6"
                    >
                    {artists}
                    </p>
                </div>

                <div
                className="content is-horizontal"
                >
                <div> &nbsp; </div>
                <div> &nbsp; </div>
                <div> &nbsp; </div>
                <div> &nbsp; </div>
                <div className="field has-addons">
                {
                    boards.map(board => {
                        if (board.difficulty_rating > 20) {
                            board.difficulty_rating = "20+"
                        }

                        switch (board.difficulty_name) {
                            case 0: // novice
                                return <p
                                className="control"
                                >
                                    <Button
                                    renderAs={NoviceButton}
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 1: // advanced
                                return <p
                                className="control"
                                >
                                    <Button
                                    className="is-warning"
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 2: // exhaust
                                return <p
                                className="control"
                                >
                                    <Button
                                    className="is-danger"
                                    >
                                    {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 3: // maximum
                                return <p
                                className="control"
                                >
                                    <Button
                                    renderAs={MaximumButton}>
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 4: // infinite (green for now)
                                return <p
                                className="control"
                                >
                                    <Button
                                    className="is-success"
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 5: // gravity
                                return <p
                                className="control"
                                >
                                    <Button
                                    renderAs={GravityButton}
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 6: // heavenly
                                return <p
                                className="control"
                                >
                                    <Button
                                    renderAs={HeavenlyButton}
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            case 7: // vivid
                                return <p
                                className="control"
                                >
                                    <Button
                                    renderAs={VividButton}
                                    >
                                        {board.difficulty_rating}
                                    </Button>
                                </p>
                            break;
                            default:
                                return null;
                        }
                })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TrackCard;
