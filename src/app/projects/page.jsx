import ProjectsGallery from "@/components/ProjectsGallery";
import styles from "./projects.module.css";
import SiteHeader from "../../components/SiteHeader";

export const metadata = {
    title: "Projects | Tetrad Building Group, LLC",
    description: "A selection of recent work by Tetrad Building Group, LLC in the Kansas City area.",
};


export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <SiteHeader />
            <div className={`container ${styles.inner}`}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Projects</h1>
                    <p className={styles.subtitle}>
                        A selection of recent work. Click any photo to view.
                    </p>
                </header>
                <ProjectsGallery />
            </div>
        </main>
    );
}