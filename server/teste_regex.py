import re

text = """
[generated prompt] In a vast, infinite void, darkness envelops everything, a deep black void that seems to absorb all light. The void is a space of reflection, an emptiness that is vivid and intense. As I explore this strange realm, I suddenly encounter my grandmother. Approaching her, she embraces me tightly, whispering, "I died," with a serene smile on her face. Trembling with mixed emotions, I find solace in her calm demeanor. We gaze into each other's eyes, and I witness a remarkable transformation as she gradually regresses in age, eventually becoming a vibrant thirty-year-old. Curious, I inquire about her destination after leaving here. Her response is uncertain, but her love for me remains unwavering. Once again, she returns to her older self, planting a gentle kiss on my forehead and cradling my head tenderly, just as she used to do before bidding farewell. Drifting back into slumber, I awaken to the sounds of my mother's sobs, realizing that my grandmother's departure has become a painful reality. Though I lack religious or spiritual beliefs, that night has freed me from the fear of death, instilling a hope that something good awaits beyond. Charlie, wherever you are, know that I still love you dearly.    """
pattern = r"\[generated prompt\](?: |\n)([^\n]+)"
matches = re.findall(pattern, text)

if matches:
    # The immediate paragraph is in the first match
    immediate_paragraph = matches[0]
    print(immediate_paragraph)
