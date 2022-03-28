const Navbar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Dashboard
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="file"></span>
              Orders
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="users"></span>
              Customers
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="layers"></span>
              Integrations
            </span>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <span className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
