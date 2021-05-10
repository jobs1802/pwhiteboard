let blankCanvas =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAscAAANkCAYAAABbCYfaAAAgAElEQVR4Xu3awQkAIRRDQe2/aWE3l0BKGEsY3uETvMcjQIAAAQIECBAgQOATuBwIECBAgAABAgQIEPgFHMdKIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAhHKCMAABA8SURBVAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECDiONUCAAAECBAgQIECgBSzHiiBAgAABAgQIECBgOdYAAQIECBAgQIAAAcuxBggQIECAAAECBAhMAd8qhEGAAAECBAgQIEAgAo5jKRAgQIAAAQIECBBwHGuAAAECBAgQIECAQAtYjhVBgAABAgQIECBAwHKsAQIECBAgQIAAAQKWYw0QIECAAAECBAgQmAK+VQiDAAECBAgQIECAQAQcx1IgQIAAAQIECBAg4DjWAAECBAgQIECAAIEWsBwrggABAgQIECBAgIDlWAMECBAgQIAAAQIELMcaIECAAAECBAgQIDAFfKsQBgECBAgQIECAAIEIOI6lQIAAAQIECBAgQMBxrAECBAgQIECAAAECLWA5VgQBAgQIECBAgAABy7EGCBAgQIAAAQIECFiONUCAAAECBAgQIEBgCvhWIQwCBAgQIECAAAECEXAcS4EAAQIECBAgQICA41gDBAgQIECAAAECBFrAcqwIAgQIECBAgAABApZjDRAgQIAAAQIECBCwHGuAAAECBAgQIECAwBTwrUIYBAgQIECAAAECBCLgOJYCAQIECBAgQIAAAcexBggQIECAAAECBAi0gOVYEQQIECBAgAABAgQsxxogQIAAAQIECBAgYDnWAAECBAgQIECAAIEp4FuFMAgQIECAAAECBAhEwHEsBQIECBAgQIAAAQKOYw0QIECAAAECBAgQaAHLsSIIECBAgAABAgQIWI41QIAAAQIECBAgQMByrAECBAgQIECAAAECU8C3CmEQIECAAAECBAgQiIDjWAoECBAgQIAAAQIEHMcaIECAAAECBAgQINAClmNFECBAgAABAgQIELAca4AAAQIECBAgQICA5VgDBAgQIECAAAECBKaAbxXCIECAAAECBAgQIBABx7EUCBAgQIAAAQIECETgAdGZA2Wc+KYVAAAAAElFTkSuQmCC";
module.exports = blankCanvas;
