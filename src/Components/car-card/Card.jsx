import React from "react";
import "./Card.css";
import CarImage from "../../Assets/Images/car01.min.jpg";
import CalendarImage from "../../Assets/Images/fi_calendar.png";
import UserImage from "../../Assets/Images/fi_users.png";
import SettingsImage from "../../Assets/Images/fi_settings.png";

import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const CarCard = () => {
	return (
		<section className="cars-container mt-4">
			<div className="container">
				{/* <div id="not-found" className="text-center">
					<p className="text-black-50">Data tidak ditemukan :(</p>
				</div> */}
				<Row>
					<Col className="mb-3" md={4}>
						<Card>
							<Card.Img
								className="align-self-center"
								variant="top"
								src={CarImage}
							/>
							<Card.Body>
								<Card.Title className="mt-3 mb-1">
									Manufaktur
									<span className="text-black-50 ms-1">
										Type
									</span>
								</Card.Title>
								<Card.Text className="card-harga mb-1">
									Rp. 100000 / hari
								</Card.Text>
								<Card.Text className="card-desc font-weight-light mb-1">
									desc
								</Card.Text>
								<div className="card-info">
									<div className="info">
										<p className="orang d-flex">
											<img
												src={UserImage}
												alt="user icon"
											/>
											<span className="ms-2">
												4 orang
											</span>
										</p>
										<p className="gear d-flex mt-3">
											<img
												src={SettingsImage}
												alt="setting icon"
											/>
											<span className="ms-2">
												Transmission
											</span>
										</p>
										<p className="tahun d-flex mt-3">
											<img
												src={CalendarImage}
												alt="calendar icon"
											/>
											<span className="ms-2">
												Tahun 2019
											</span>
										</p>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default CarCard;
