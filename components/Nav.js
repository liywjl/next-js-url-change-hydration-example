import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { productTypes, productIDs } from "../constants";

const Nav = function () {
  const { query, push } = useRouter();
  return (
    <div className={styles.nav}>
      <h2>Parent Rout</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Using A tags</h3>
          <ul>
            {productTypes.map((productType) => (
              <li key={`${productType}-a-tags`}>
                <a
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link</h3>
          <ul>
            {productTypes.map((productType) => (
              <li key={`${productType}-a-tags`}>
                <Link
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link (with Shallow = true)</h3>
          <ul>
            {productTypes.map((productType) => (
              <li key={`${productType}-a-tags`}>
                <Link
                  shallow
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick)</h3>
          <ul>
            {productTypes.map((productType) => (
              <li key={`${productType}-a-tags`}>
                <button
                  onClick={() => push(`/stepper/${productType}`)}
                >{`/stepper/${productType}`}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick + shallow = true)</h3>
          <ul>
            {productTypes.map((productType) => (
              <li key={`${productType}-a-tags`}>
                <button
                  onClick={() =>
                    push(`/stepper/${productType}`, undefined, {
                      shallow: true,
                    })
                  }
                >{`/stepper/${productType}`}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <h2>Secret path (non-dynamic path)</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Using A tags</h3>
          <ul>
            <li>
              <a href={`/stepper/chocolate`}>{`/stepper/chocolate`}</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link</h3>
          <ul>
            <li>
              <Link href={`/stepper/chocolate`}>{`/stepper/chocolate`}</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link (with Shallow = true)</h3>
          <ul>
            <li>
              <Link shallow href={`/stepper/chocolate`}>
                {`/stepper/chocolate`}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick)</h3>
          <ul>
            <li>
              <button onClick={() => push(`/stepper/chocolate`)}>
                {`/stepper/chocolate`}
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick + shallow = true)</h3>
          <ul>
            <li>
              <button
                onClick={() =>
                  push(`/stepper/chocolate`, undefined, {
                    shallow: true,
                  })
                }
              >
                {`/stepper/chocolate`}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <h2>Nested Routing</h2>

      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Using A tags</h3>
          <ul>
            {productIDs.map((productID) => (
              <li key={`${productID}-a-tags`}>
                <a
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link</h3>
          <ul>
            {productIDs.map((productID) => (
              <li key={`${productID}-link-tags`}>
                <Link
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Link (with Shallow = true)</h3>
          <ul>
            {productIDs.map((productID) => (
              <li key={`${productID}-link-shallow-tags`}>
                <Link
                  shallow
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick)</h3>
          <ul>
            {productIDs.map((productID) => (
              <li key={`${productID}-router-tags`}>
                <button
                  onClick={() =>
                    push(`/stepper/${query.productType}/${productID}`)
                  }
                >{`/stepper/${query.productType}/${productID}`}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Using Next Router (button with onClick + shallow = true)</h3>
          <ul>
            {productIDs.map((productID) => (
              <li key={`${productID}-router-shallow-tags`}>
                <button
                  onClick={() =>
                    push(
                      `/stepper/${query.productType}/${productID}`,
                      undefined,
                      {
                        shallow: true,
                      }
                    )
                  }
                >{`/stepper/${query.productType}/${productID}`}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
