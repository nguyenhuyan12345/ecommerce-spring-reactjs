function Sidebars({ title, children }) {
    return (
        <>
            <Offcanvas
                show={showSidebar}
                onHide={handleCloseSidebar}
                placement="end"
                className={cx('offcanvasSidebar')}
            >
                <Offcanvas.Header className={cx('cardHeader')} closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{children}</Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
