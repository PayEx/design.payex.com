import React from "react";
import classnames from "classnames";

import { ComponentPreview, DocContainer } from "#";

const DocTable = ({ striped, condensed, hover }) => {
    const tableClasses = classnames(
        "table",
        striped ? "table-striped" : null,
        condensed ? "table-condensed" : null,
        hover ? "table-hover" : null
    );

    return (
        <table className={tableClasses}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Sven</td>
                    <td>Svensson</td>
                    <td>Visby</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Sara</td>
                    <td>Svensson</td>
                    <td>Stockholm</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Ola</td>
                    <td>Nordmann</td>
                    <td>Oslo</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Holger</td>
                    <td>Danske</td>
                    <td>Copenhagen</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Matti</td>
                    <td>Meikäläinen</td>
                    <td>Lahti</td>
                </tr>
            </tbody>
        </table>
    );
};

const BasicTable = () => (
    <>
        <h2 id="basic-table">Basic table</h2>
        <p>Basic tables info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DocTable />
        </ComponentPreview>
    </>
);

const StripedTable = () => (
    <>
        <h2 id="striped-table">Striped table</h2>
        <p>Striped tables info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DocTable striped />
        </ComponentPreview>
    </>
);

const CondensedTable = () => (
    <>
        <h2 id="condensed-table">Condensed table</h2>
        <p>Condensed table info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DocTable condensed />
        </ComponentPreview>
    </>
);

const HoverTable = () => (
    <>
        <h2 id="hover-table">Hover table</h2>
        <p>Hover tables info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DocTable hover />
        </ComponentPreview>
    </>
);

const HoverStripedTable = () => (
    <>
        <h2 id="hover-striped-table">Hover striped table</h2>
        <p>Hover striped tables info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <DocTable hover striped />
        </ComponentPreview>
    </>
);

const DescriptionTable = () => (
    <>
        <h2 id="description-table">Description table</h2>
        <p>Description tables info...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <table className="table table-description table-striped">
                <thead>
                    <tr>
                        <th scope="col">Key</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <th scope="row">Occupation</th>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <th scope="row">Skills</th>
                        <td>Unknown</td>
                    </tr>
                </tbody>
            </table>
        </ComponentPreview>
    </>
);

const Tables = () => (
    <DocContainer docToc>
        <p className="lead">Lots of nice info about tables will be here...</p>
        <BasicTable />
        <StripedTable />
        <CondensedTable />
        <HoverTable />
        <HoverStripedTable />
        <DescriptionTable />
    </DocContainer>
);

export default Tables;

/* For testing */
export { DocTable, BasicTable, StripedTable, CondensedTable, HoverTable, HoverStripedTable, DescriptionTable };
