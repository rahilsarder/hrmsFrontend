import React from "react";
import logo from "./Assets/imgs/InsLogo.png";

function Sidebar() {
	return (
		<div>
			{/* <!-- Sidebar --> */}
			<ul
				className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100"
				id="accordionSidebar"
			>
				{/* <!-- Sidebar - Brand --> */}
				<a
					className="sidebar-brand d-flex align-items-center justify-content-center"
					href="/dashboard"
				>
					<div className="sidebar-brand-icon">
						{/* <i className="fas fa-laugh-wink"></i> */}
						<img src={logo} width="150px" />
					</div>
					<div className="sidebar-brand-text mx-3">
						
					</div>
				</a>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider my-0" />

				{/* <!-- Nav Item - Dashboard --> */}
				<li className="nav-item active">
					<a className="nav-link" href="/dashboard">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard</span>
					</a>
				</li>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider" />

				{/* <!-- Heading --> */}
				<div className="sidebar-heading">Interface</div>

				{/* <!-- Nav Item - Pages Collapse Menu --> */}
				<li className="nav-item">
					<a
						className="nav-link collapsed"
						href="#"
						data-toggle="collapse"
						data-target="#collapseTwo"
						aria-expanded="true"
						aria-controls="collapseTwo"
					>
						<i className="fas fa-fw fa-cog"></i>
						<span>Components</span>
					</a>
					<div
						id="collapseTwo"
						className="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordionSidebar"
					>
						<div className="bg-white py-2 collapse-inner rounded">
							<h6 className="collapse-header">
								Custom Components:
							</h6>
							<a
								className="collapse-item"
								href="buttons.html"
							>
								Buttons
							</a>
							<a
								className="collapse-item"
								href="cards.html"
							>
								Cards
							</a>
						</div>
					</div>
				</li>

				{/* <!-- Nav Item - Utilities Collapse Menu --> */}
				<li className="nav-item">
					<a
						className="nav-link collapsed"
						href="#"
						data-toggle="collapse"
						data-target="#collapseUtilities"
						aria-expanded="true"
						aria-controls="collapseUtilities"
					>
						<i className="fas fa-fw fa-wrench"></i>
						<span>Utilities</span>
					</a>
					<div
						id="collapseUtilities"
						className="collapse"
						aria-labelledby="headingUtilities"
						data-parent="#accordionSidebar"
					>
						<div className="bg-white py-2 collapse-inner rounded">
							<h6 className="collapse-header">
								Custom Utilities:
							</h6>
							<a
								className="collapse-item"
								href="utilities-color.html"
							>
								Colors
							</a>
							<a
								className="collapse-item"
								href="utilities-border.html"
							>
								Borders
							</a>
							<a
								className="collapse-item"
								href="utilities-animation.html"
							>
								Animations
							</a>
							<a
								className="collapse-item"
								href="utilities-other.html"
							>
								Other
							</a>
						</div>
					</div>
				</li>

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider" />

				{/* <!-- Heading --> */}
				<div className="sidebar-heading">Addons</div>

				{/* <!-- Nav Item - Pages Collapse Menu --> */}
				

				{/* <!-- Nav Item - Charts --> */}
				<li className="nav-item">
					<a className="nav-link" href="/dashboard/users">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Users</span>
					</a>
				</li>

				{/* <!-- Nav Item - Tables --> */}
				<li className="nav-item">
					<a className="nav-link" href="/dashboard/employees">
						<i className="fas fa-fw fa-table"></i>
						<span>Employees</span>
					</a>
				</li>

				{/* <!-- Divider -->
				<hr className="sidebar-divider d-none d-md-block" />

				<!-- Sidebar Toggler (Sidebar) -->
				<div className="text-center d-none d-md-inline">
					<button
						className="rounded-circle border-0"
						id="sidebarToggle"
					></button>
				</div> */}
			</ul>
		</div>
	);
}

export default Sidebar;
