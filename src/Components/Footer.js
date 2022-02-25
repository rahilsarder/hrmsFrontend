import React from "react";

function Footer() {
	let date = new Date();
	var year = date.getFullYear();
	

	return (
		<div>
			{/* <!-- Footer --> */}
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; TroikaSoft || 2020- {year}</span>
					</div>
				</div>
			</footer>
			{/* <!-- End of Footer --> */}
		</div>
	);
}

export default Footer;
