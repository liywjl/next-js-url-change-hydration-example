import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { productTypes, productIDs } from "../constants";

const Nav = function () {
  const { query, push } = useRouter();
  return (
    <div className={styles.nav}>
      <table>
        <thead>
          <tr>
            <th>Product Type (dynamic routes)</th>
            <th>{"<a ...>"}</th>
            <th>{"<Link ...>"}</th>
            <th>{"<Link shallow ...>"}</th>
            <th>{"Router.push(...)"}</th>
            <th>{"Router.push(... { shallow: true })"}</th>
          </tr>
        </thead>
        <tbody>
          {productTypes.map((productType) => (
            <tr key={productType}>
              <td>{productType}</td>
              <td>
                <a
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</a>
              </td>
              <td>
                <Link
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </td>
              <td>
                <Link
                  shallow
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </td>
              <td>
                <button
                  onClick={() => push(`/stepper/${productType}`)}
                >{`/stepper/${productType}`}</button>
              </td>
              <td>
                <button
                  onClick={() =>
                    push(`/stepper/${productType}`, undefined, {
                      shallow: true,
                    })
                  }
                >{`/stepper/${productType}`}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Product Type (static routes)</th>
            <th>{"<a ...>"}</th>
            <th>{"<Link ...>"}</th>
            <th>{"<Link shallow ...>"}</th>
            <th>{"Router.push(...)"}</th>
            <th>{"Router.push(... { shallow: true })"}</th>
          </tr>
        </thead>
        <tbody>
          {["chocolate"].map((productType) => (
            <tr key={productType}>
              <td>{productType}</td>
              <td>
                <a
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</a>
              </td>
              <td>
                <Link
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </td>
              <td>
                <Link
                  shallow
                  href={`/stepper/${productType}`}
                >{`/stepper/${productType}`}</Link>
              </td>
              <td>
                <button
                  onClick={() => push(`/stepper/${productType}`)}
                >{`/stepper/${productType}`}</button>
              </td>
              <td>
                <button
                  onClick={() =>
                    push(`/stepper/${productType}`, undefined, {
                      shallow: true,
                    })
                  }
                >{`/stepper/${productType}`}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Nested Routes</th>
            <th>{"<a ...>"}</th>
            <th>{"<Link ...>"}</th>
            <th>{"<Link shallow ...>"}</th>
            <th>{"Router.push(...)"}</th>
            <th>{"Router.push(... { shallow: true })"}</th>
          </tr>
        </thead>
        <tbody>
          {productIDs.map((productID) => (
            <tr key={productID}>
              <td>{productID}</td>
              <td>
                <a
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</a>
              </td>
              <td>
                <Link
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</Link>
              </td>
              <td>
                <Link
                  shallow
                  href={`/stepper/${query.productType}/${productID}`}
                >{`/stepper/${query.productType}/${productID}`}</Link>
              </td>
              <td>
                <button
                  onClick={() =>
                    push(`/stepper/${query.productType}/${productID}`)
                  }
                >{`/stepper/${query.productType}/${productID}`}</button>
              </td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nav;
