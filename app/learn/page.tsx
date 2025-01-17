import styles from "./Learn.module.scss";

export default function Learn() {
	return (
		<main className={styles.main}>
			<div className={`content ${styles.nav}`}>
				<nav>
					<ul>
						<li>
							<a
								href="#getting-started"
								className="is-3 navbar-item"
							>
								Getting started
							</a>
						</li>
						<li>
							<a href="#practice" className="is-3 navbar-item">
								Practice
							</a>
						</li>
						<li>
							<a
								href="#create-content"
								className="is-3 navbar-item"
							>
								Create content
							</a>
						</li>
						<li>
							<a href="#customize" className="is-3 navbar-item">
								Customize
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<section style={{ flex: 1 }}>
				<a id="getting-started" className="title">
					Getting started
				</a>
				<div
					style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
				>
					<div className={`box ${styles.tile}`}>
						hellawizagwizugdwzio
					</div>
					<div className={`box ${styles.tile}`}>
						<a
							className="button"
							href="https://example.com"
							style={{ backgroundColor: "red" }}
						>
							hello
						</a>
					</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
					<div className={`box ${styles.tile}`}>hello</div>
				</div>
				<a id="practice" className="title">
					Practice
				</a>
				<div className="box">hello</div>
				<a id="create-content" className="title">
					Create content
				</a>
				<div className="box">hello</div>
				<a id="customize" className="title">
					Customize
				</a>
				<div className="box">hello</div>
			</section>
		</main>
	);
}
