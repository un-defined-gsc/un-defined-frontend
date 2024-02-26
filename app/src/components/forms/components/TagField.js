import TagChip from "@/components/chip/tag";
import { Tag } from "@mui/icons-material";
import { FormControl, FormHelperText, Grid, TextField } from "@mui/material"
import { useState } from "react";

const TagField = ({ tags = [], setTags = () => { } }) => {
    const [tagName, setTagName] = useState("");
    const [lastAddedTag, setLastAddedTag] = useState("");
    // const [tags, setTags] = useState([]);
    const [error, setError] = useState(false);

    let keys = ["Enter", " ", ";", ","]
    let whitelistRegex = /^[a-zA-Z0-9]+$/;

    const handleChangeTags = (e) => {
        setLastAddedTag("");
        if (e.target.value?.match(whitelistRegex) || (e.target.value == "" && tagName.length > 0)) {
            setTagName(e.target.value);
            setError("");
            return
        } else if (!e.target.value?.match(whitelistRegex)) {
            if (tags[tags.length - 1].tag != lastAddedTag.tag) {
                if (keys.includes(e.target.value))
                    setError("You cannot use seperate symbols as first character in tags.");
                else
                    setError(`You cannot use ${e.target.value == '"' ? `'${e.target.value}'` : `"${e.target.value.slice(-1)}"`} in tags. Please use only letters and numbers.`);
            }
        }
    }

    const handleKeyDownTags = (e) => {
        if (keys.includes(e.key)) {
            let newTag = e.target.value.trim();

            keys.forEach((key) => {
                newTag = newTag.replace(key, " ");
            });

            if (newTag == "") return;

            setTags([...tags, { tag: newTag }]);
            setLastAddedTag({ tag: newTag });
            setTagName("");
            setError("");
        }
    }

    const handleDeleteTag = index => e => {
        let newTags = tags.filter((_, i) => i != index);
        setTags(newTags);
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-required"
                            name="tags"
                            label={
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                                    <Tag />
                                    Tags
                                </span>
                            }
                            type="text"
                            value={tagName}
                            onKeyDown={handleKeyDownTags}
                            onChange={handleChangeTags}
                            error={error && error != ""}
                        />

                        <FormHelperText error={error && error != ""}>
                            {
                                error && error != ""
                                    ? error
                                    : 'Separate tags with "space", "enter", ";" or ","'
                            }
                        </FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item container xs={12} spacing={1}>
                    {
                        tags?.length > 0
                            ? tags?.map((tag, index) => (
                                <Grid item key={index}>
                                    <TagChip
                                        label={tag.tag}
                                        onDelete={handleDeleteTag(index)}
                                    />
                                </Grid>
                            ))
                            : null
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default TagField