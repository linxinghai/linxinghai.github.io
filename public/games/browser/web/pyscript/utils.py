from datetime import datetime as dt

def format_date(dt_, fmt='%Y/%m/%d, %H:%M:%S'):
    return f"{dt_:{fmt}}"


def now(fmt="%y/%m/%d,%H:%M:%S"):
    return format_date(dt.now(), fmt)


def remove_class(element, class_name):
    element.element.classList.remove(class_name)


def add_class(element, class_name):
    element.element.classList.add(class_name)


