import { AllVersionChanges } from "./AllVersionChanges";
import { SingleVersionChanges } from "./SingleVersionChanges";
import styles from "../changes.module.scss";
import { VersionData } from "../changes-types";

export interface VersionChangesSharedProps {
  data: VersionData | VersionData[]
}

export const VersionChangesShared = ({ data }: VersionChangesSharedProps) => (
  <main data-q="changes">
    {Array.isArray(data) ? (
      <AllVersionChanges data={data}/>
    ) : (
      <SingleVersionChanges data={data}/>
    )}
    <style jsx global>{`
      .copy-trigger.${styles.highlighted} > .copy {
        color: #005c32;
      }

      .copy-trigger.${styles.highlighted}:hover > .copy {
        color: hsl(0, 0%, 80%);
      }
    `}</style>
  </main>
);