import React from "react";
import PropTypes from "prop-types";
import { Addon, BtnAddon } from "@/InputGroup";

const Datepicker = ({ format, time, min, max, months, value, label, prefixValue, prefixType, fulldate, mode, allowinput, required, id }) => {
    const attrs = {
        id,
        className: "form-control",
        type: "text",
        "data-datepicker": "",
        "data-datepicker-format": format || null,
        "data-datepicker-time": time || null,
        "data-datepicker-min": min || null,
        "data-datepicker-max": max || null,
        "data-datepicker-value": value || null,
        "data-datepicker-months": months || null,
        "data-datepicker-fulldate": fulldate || null,
        "data-datepicker-mode": mode || null,
        "data-datepicker-allowinput": allowinput || null,
        "data-required": required || null
    };

    return (
        label ? (
            <div className="form-group">{"\n"}
                <label htmlFor={id || null}>{label}</label>{"\n"}
                <div className="input-group">{"\n"}
                    {!prefixValue
                        ? null
                        : (!prefixType
                            ? <Addon value={prefixValue}/>
                            : (prefixType === "button"
                                ? <BtnAddon value={prefixValue} className="input-group-addon" />
                                : <Addon icon={prefixType} value={prefixValue} />))}
                    {"\n"}
                    <input {...attrs} />{"\n"}
                </div>
            </div>
        ) : <input {...attrs} />);
};

Datepicker.propTypes = {
    format: PropTypes.oneOf(["nb", "sv", "da", "fi", "en", "iso8601"]),
    prefixType: PropTypes.oneOf(["button", "icon"]),
    time: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    months: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool
};

export default Datepicker;

// !prefixType && prefixValue
//     ? <Addon value={prefixValue}/>
//     : (prefixType === "button"
//         ? <BtnAddon className={className} value={prefixValue} />
//         : <Addon icon={type} value={prefixValue} />);

// !prefixValue
//     ? null
//     : (!prefixType
//         ? <Addon value={prefixValue}/>
//         : (prefixType === "button"
//             ? <BtnAddon className={className} value={prefixValue} />
//             : <Addon icon={prefixType} value={prefixValue}>))
