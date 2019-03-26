import React, { Component } from "react";

import { ComponentPreview, DocContainer, Property } from "#";
import { validation } from "$/px-script/main/";

const DefaultSlab = () => (
    <>
        <h2 id="default-slab">Default slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab">
                <p>Do you want to sign up for the slab mailing list?</p>
                <form action="#" noValidate data-validate>
                    <div className="form-group">
                        <label htmlFor="validation-email-2">Email</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="material-icons">email</i></span>
                            <input type="email" className="form-control" id="validation-email-2" placeholder="bob.corlsan@example.com" required />
                        </div>
                        <div className="help-block" data-success="Right!" data-error="Wrong!">This one might be a little tricky</div>
                    </div>
                    <button className="btn btn-executive" type="submit">Submit</button>
                </form>
            </div>
        </ComponentPreview>
    </>
);

const SlabElevated = () => (
    <>
        <h2 id="elevated-slab">Elevated slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-elevated">
                Look ma, im elevated!
            </div>
        </ComponentPreview>
    </>
);

const SlabWell = () => (
    <>
        <h2 id="slab-well">Slab well</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const SlabArrow = () => (
    <>
        <h2 id="slab-arrow">Slab arrow</h2>
        <p>
            <Property val=".slab-arrow" /> inherits the color from the slab it is appended to, and is given a border
            if used with slab-white.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
        </ComponentPreview>
    </>
);

const SlabColors = () => (
    <>
        <h2 id="slab-colors">Slab colors</h2>
        <p>
            Both white and apricot variants of slab exist.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white">
                <h4>Here is some text and then a striped item list</h4>
                <p>
                    Some text with a small listing of items underneath.
                    <ul className="list item-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </p>
            </div>

            <div className="slab slab-apricot">
                <h4>Here is some text and then a striped item list</h4>
                <p>
                    Some text with a small listing of items underneath.
                    <ul className="list item-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </p>
            </div>
        </ComponentPreview>
    </>
);

const SlabMuted = () => (
    <>
        <h2 id="slab-muted">Slab muted</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-muted">
                <h4>This text will be gray.</h4>{"\n"}
                <span>And this text will be gray.</span>{"\n"}
                Even this text will be gray!
            </div>
        </ComponentPreview>
    </>
);

const SlabSizes = () => (
    <>
        <h2 id="slab-sizes">Slab sizes</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-sm">
                This is very snug.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-lg">
                This is so spacious I can hardly believe it!
            </div>
        </ComponentPreview>
    </>
);

const SlabCombinations = () => (
    <>
        <h2 id="slab-combinations">Slab combinations</h2>
        <p>
            You can mix and match slab variations as you see fit.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-muted slab-elevated">
                This is an elevated white slab with muted text.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-well slab-lg">
                This is a big well!
            </div>
        </ComponentPreview>
    </>
);

class Slab extends Component {
    componentDidMount () {
        validation.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Slabs are container components, therefore it works with whatever you want to put in it.
                </p>
                <DefaultSlab />
                <SlabElevated />
                <SlabWell />
                <SlabArrow />
                <SlabColors />
                <SlabMuted />
                <SlabSizes />
                <SlabCombinations />
            </DocContainer>
        );
    }
}

export default Slab;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabArrow, SlabColors, SlabSizes, SlabMuted, SlabCombinations };
