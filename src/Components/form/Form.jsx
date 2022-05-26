import React from "react";
import "./Form.css";
import CalendarImg from "../../Assets/Images/fi_calendar.png";
import UserImg from "../../Assets/Images/fi_users.png";
import {
	Form,
	Row,
	Col,
	FormControl,
	InputGroup,
	Button,
} from "react-bootstrap";

const FormComp = () => {
	return (
		<section className="form-section">
			<div className="container">
				<div className="form-container mx-auto">
					<Form className="form-row" id="form">
						<Row>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="driver">
										Tipe Driver
									</Form.Label>
									<Form.Select
										className="form-control"
										aria-label="Select driver"
										id="driver"
										required
									>
										<option defaultChecked disabled>
											Pilih Tipe Driver
										</option>
										<option value="true">
											Dengan Sopir
										</option>
										<option value="false">
											Tanpa Sopir (Lepas Kunci)
										</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="datePickerId">
										Tanggal
									</Form.Label>
									<InputGroup className="input-group">
										<FormControl
											className="tanggal"
											type="date"
											aria-label="Date"
											id="datePickerId"
											required
										/>
										<InputGroup.Text>
											<img
												src={CalendarImg}
												alt="calendar"
											/>
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col>
								<Form.Label htmlFor="jam">
									Waktu Jemput/Ambil
								</Form.Label>
								<Form.Select
									className="form-control"
									aria-label="Waktu jemput"
									id="jam"
									required
								>
									<option defaultChecked disabled>
										Pilih Waktu
									</option>
									<option value="8">08.00 WIB</option>
									<option value="9">09.00 WIB</option>
									<option value="10">10.00 WIB</option>
									<option value="11">11.00 WIB</option>
									<option value="12">12.00 WIB</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="penumpang">
										Jumlah Penumpang (optional)
									</Form.Label>
									<InputGroup className="input-group">
										<FormControl
											className="penumpang"
											aria-label="Jumlah penumpang"
											id="penumpang"
											required
										/>
										<InputGroup.Text>
											<img src={UserImg} alt="User" />
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col md={1} className="button-wrap d-flex align-items-end">
								<Button
									className="main__button font-weight-bold border-0"
									variant="success"
									type="button"
								>
									Cari Mobil
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default FormComp;
