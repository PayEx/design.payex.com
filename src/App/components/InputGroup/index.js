import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Addon = ({ icon, value, disabled }) => (
    <span className="input-group-addon" disabled={disabled}>{icon ? <>{"\n"}<i className="material-icons">{value}</i>{"\n"}</> : value}</span>
);

const BtnAddon = ({ className, value, valIcon, btnType, disabled }) => (
    <button type="button" className={`btn${btnType ? ` btn-${btnType}` : ""}${className ? ` ${className}` : ""}`} disabled={disabled}>{"\n"}
        {!valIcon ? value : <i className="material-icons">{value}</i>}{"\n"}
    </button>
);

const Feedback = ({ icon }) => (
    <span className="form-control-feedback">{"\n\t\t"}
        <i className="material-icons">{icon}</i>{"\n\t"}
    </span>
);

const InputGroup = ({
    id,
    type,
    placeholder,
    pattern,
    validate,
    required,
    defaultValue,
    autoComplete,
    disabled,
    readOnly,
    label,
    validationState,
    selectOptions,
    prefixValue,
    prefixType,
    prefixBtnType,
    postfixValue,
    postfixType,
    postfixBtnType,
    feedbackIcon,
    helpBlock,
    errorMessage,
    successMessage
}) => {
    const attrs = {
        type: type || null,
        className: "form-control",
        id: id || null,
        placeholder: placeholder || null,
        defaultValue: defaultValue || "",
        disabled: disabled || null,
        readOnly: readOnly || null,
        autoComplete: autoComplete || null,
        required: required || null,
        pattern: pattern ? "" : null,
        "data-validate": validate ? "" : null
    };

    const inputGrpClasses = classnames(
        "input-group",
        validationState ? `has-${validationState}` : null,
        feedbackIcon ? "has-feedback" : null
    );

    return (
        <div className="form-group">{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
            <div className={inputGrpClasses}>{"\n"}
                {!prefixValue
                    ? null
                    : (!prefixType
                        ? <Addon value={prefixValue}/>
                        : (prefixType === "button"
                            ? <BtnAddon value={prefixValue} btnType={prefixBtnType} disabled={disabled} />
                            : <Addon icon={prefixType} value={prefixValue} disabled={disabled} />))}
                {type === "textarea" ?
                    <textarea {...attrs} ></textarea>
                    : type === "select" ?
                        <select className="form-control" disabled={disabled} readOnly={readOnly}>{"\n\t\t"}
                            {selectOptions.map((opt, i) => (
                                <Fragment key={opt + i}>
                                    <option>{opt}</option>{(i !== selectOptions.length - 1) ? "\n\t\t" : ""}
                                </Fragment>
                            ))}{"\n\t"}
                        </select>
                        :
                        <input {...attrs} />}
                {"\n"}
                {feedbackIcon ? <Feedback icon={feedbackIcon} /> : null} {feedbackIcon ? "\n" : null}
                {!postfixValue
                    ? null
                    : (!postfixType
                        ? <Addon value={postfixValue}/>
                        : (postfixType === "button"
                            ? <BtnAddon value={postfixValue} btnType={postfixBtnType} disabled={disabled} />
                            : <Addon icon={postfixType} value={postfixValue} disabled={disabled} />))}
            </div>
            {helpBlock ? <div className="help-block" data-success={successMessage || null} data-error={errorMessage || null}>{helpBlock}</div> : null}
        </div>
    );
};

InputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    validate: PropTypes.bool,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    validationState: PropTypes.oneOf(["success", "error", ""]),
    selectOptions: PropTypes.array,
    prefixValue: PropTypes.string,
    prefixType: PropTypes.oneOf(["button", "icon", ""]),
    prefixBtnType: PropTypes.oneOf(["primary", "secondary", "danger"]),
    postfixValue: PropTypes.string,
    postfixType: PropTypes.oneOf(["button", "icon", ""]),
    postfixBtnType: PropTypes.oneOf(["primary", "secondary", "danger"]),
    feedbackIcon: PropTypes.string,
    helpBlock: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    errorMessag: PropTypes.string,
    successMessag: PropTypes.string
};

export default InputGroup;

export {
    Addon,
    BtnAddon
};
