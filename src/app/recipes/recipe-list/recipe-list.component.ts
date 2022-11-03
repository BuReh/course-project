import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is surely a test', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExYUFBQWFxYYGRsbGRkYGRwbGRsYHhsbHxkbGRkZHykhHhsmHBkYIjIkJiosLy8vGyA1OjUuOSkuLywBCgoKDg0OHBAQHDAmICYuMC40LjQ0Li8uMS4xMC4wMi4uLjAuLC4wLi4uMC4uMC4wMC4uLy4uLi4wLi4uLjAuMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEQQAAECBAQCCAMGBAMHBQAAAAECEQADITEEEkFRBWEGEyIycYGRobHB8CNCUmLR4RRykvEVM4IHFnOissLSF1NUs+L/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQYA/8QAMREAAgECBAQEBgIDAQEAAAAAAQIAAxEEEiExE0FRYQUicYEUkaGx0fAy4SNSwfEz/9oADAMBAAIRAxEAPwCgQKDwHwAjovDZM9FAxqPdo7KnIUTQvT946kWnL+aESnnDwimu1D5/EQJMwHuhxzvarNz+cJOKcE5QCkOK+A3j1xykWbnHADVm+r+vsIk9Xl8H011HOz+sQ04tTmw1oIRxSvxc6UrEFhJCmWgHZDqJ3cE+Pi0NmybKAdDgZgC43dtN9fWtOeIrdion/UfM1PjAF4km5q9/f9IG46ycp6S9mEEVud6aejWYePlxCyKBXgCQxA/Z4z68QWcbO36xJVOLnK23qPDdvSPZwJBpE7y9mzki1Ng/r5XgP8YhJv6Vp5xVda7v3gAGb7xd/EXhiFg3GyRTe5eu8e4g2Ejg9ZcjHSzqbbeFL3YfCEvFpD0JsfM/t8opkTWC3NSfYUpTmYMnEOrTvDTRKR84jPJ4ctv41CXDE8oHM4vKBY0OxIv+9Yz3EuLhNAXLDmHYP41evxjIY/ElaqmKNfHqhyoLn6S/hvDmfzMbD6z1ZHEEfhr7/DlHVcSTsq+9tvV48/4Tx0pZM0kpFljvJ2cfeHuIvU4osFPmBsoF0lPLy84bQxSVRpoekXXwVSkd7jrL9HFkWZV33rV/KtoNLx6VO3aLj3f9D6xkJ81qD2h+Ex5CnKdi3MAihf8AN7Q8sIkUzvea+XxBHZoe0SNNH5bsPIQaTiEKtQXI5egv8TvGZTjsyQ4slVeZuXJrQU+cRDjMqsxJDJDbPTmYEmSAeU2WHxCVP2nI1YWqHvYgfCJOVwCFJIfUt5HxrGQw/ExUU/yq6A1QDYbe5hTMV2U3BZwzVdwX1vpEGxkjMJsjhlZXylhvo/tp7QNLhqn1po9DrR3ir6M43PNmjrNAQl9pbWfdq602icCTuKXpq/On15ja8PN1hlOz+egrWnKtPSOkamwOvJz+39oVxY1elKM25/Kdga6wSWLOPbkHsbO3oYEwxBf4cn8avRH/AIQoPlH4V+kKBh3nmwxTDWj2Bag5+UFRiQd2qb7ty+uUUv8AEKsTyFrfOCSsQAGqNOX1aCFSealL1CgWL2Gv9o5KUWoaZVOBp2g/nFbKxgSQXUAW9KjfaJMjEO4CrjWgoOejtBB7xRS0lSyGdyQHvSlfGOLRVwee3x+qRFlzgoauPjRx8YGZ4B1FIK8HKYMTe0Rzjs2axpv/AG+UQlrGd9/0hT5+8BnjsmskKnuGrUEW9IsEzQQFc3I9OXJ/SM8rEc4PhcWpmHLlQavaBFUDeE1AkaSzM3tOznvP+u36wxGJKQOXael+cV2Ix4ctU+bU+MRFGZMsFK8ASH8tWaKdbxBV0TX7S1R8PZtX0+8tpvFgNXazV3flrFfiOLE0Abx9IEvhs4FlIKW/FT2vEmTwdGcJXMZ7tRvMuIz6uNdtGb2E1KXhyqMyr7mVq8Xm/e8BTJUpylJLXYPGiwfAEzFdUkJVMeisxCSnm/1p4SsXwvqZvVqSUKpYuCXD2DWP7xU46g2XeW0wjMuZtBMqUqbumH4biC5fdUeY+6fERfo6PLmKypFFAqTmJNr90Vry/WKs4BAJCwQoEggHUU33g0rrfQ69op6BO2xhJXG0nvo80n5GJmDxCFFkTBX7quyXcb0NtDFBNwhBpZ6EwFaCm4i8mKcc7+spVMEnNbek2aZhCwlaWzFtjUhtORgKp/eQoMaZTuBQW5gVjP4Li0yWwBzJ/AuqfLUeTRcScZKngJfq16JUaO/3Vn4KbxMXqeMVtG0P0lCpgyuq6j6yRMVUhjVAGujCvpHP4hSMrBJy01rzIiMicqUsomA0cH5UI8IDMmsKE71qOQiyWFryuKZvaa7ohinxA7IYyxXYhrtWlfXlGnzA7e2zeY19Yw/QviSRiEPQLTl8CC5benKN6qU2kEhBERVVgbRqFi5NLaDRrxIlqJ8t/b50hqJd6AfR9YeJbCjV+EeIEgEzvWcj6/vCh3VDlCgcohZjPEzKtQwVFaV+qxMVJUA7Da0BCQDbTbXWFZLS1nvOhAL0PhVxaDSpVR2DdtqNW/nCSqX7MGGtPa8HlzkJuTRwL+v1yhgAi2YyLII1DQ9a9OX00LFFOYsXHIGoiOsh9YnbSe31gpiWVDJ4g05TsW+EcRLequ6NrnlCKrKiknaPpqzEASNKw+apLJ335DnD5tmSGTsN+Z1MSESVzlBKElR0SkPQVoPCLvozw9EuciZiEFSEl1pH8pytoS7ekYVfFZtzYdJv4TBFthfvKPCcJWtlKCgg6i/NufK8X3DcGmVLKkLY0KkqB7RdgAd2JMWEvBdfMmZCxQbkEqYu2ZNhzrSD4bArnTUSFgMkpJKFdlQFlWZmJ8ozalckG+w3mxSwyUwbakc7TuA4bmCpi5qES1DuLY9l3JsG8aVi2m9GpCksAGsCPAHe7EGJ8rBhRWkh0iiV0egIyijg3+mjuIlzULSU5DLZ1LNydTSmw9nrGVUrux0axg8U7C2WZNXAyFBgWqQTQukkUYu5AuDFdxrAMUgknrAVByVZb5nYOWFd43mIGcgDslj2iAA+VxmPMt6xQ4nhqyO0ACCwIewdxXRRpX1ixQxLXux0+sdUX/HYb2gOi+IkpnlJPZlpyOp3mUDEAig7OvJ4pMbJQtRmIVmBU5ASUhINsylaveJMqWpSSFJR1rpNVDMQ9Q9CwBqH15Uj4l0zO0Xd8+UijOSlrCtPVouKLMWErJRtlDHQelr/ANTo4OkpmKmTU0OUVSS/xKebiKkYcpDlJUmtKMBbR3tGkxBk9qWpKad0qIL0opMwXqwKRoNSIBKw01Ut0pJQnaxL/dNxyO4g1qMoux366R7UUOgH9zKT+G5qpArYCntaKqdKUksRGrxsjIugIVShfLtc3qOcRDgVqKgtJJI0b18IuJWtvtM2rhQR5d+kiYDioIEuc6kDuqDdZL/lJ7yfynyaJ+LkZQFAhSV9xae6oa+BDsQaiKHE4fIaFxEvhXE+rdKhnlKIzo56KQfurGh8i4jRoYkrpuJk18LfsZZ8AxQlzpamchXu/wA6CPVp00Co8qaG0eXzJSZapa0krlKUFJUBcC45KBoU6ONCCfTGcA7hJbmUj9Y2KNiOswsVdW6TnWwaVMd4CqW/vSHhVIabSut94Xqh+WFAusP4vcfrCgbd4V+080ExZDZQzULasATAkS6Al/Txr50iaFpI/lHjsPW8NJQQDoAR8WiAojsx6QMqQkte2x52jiZAAF3rdxSDOAD5D4mjWhkxSd7Ct/nE5RIzHvI01DeY+XOI0ykFxCgLHb4RCmzYW5AlimpMPLl5y1gKk7D9dILODsAKCg2g3VZEhOt1eO3laJkmVMlmU6QUrBUSpOZOUumtLgg2sRHO4zFcRtNhNzC4cINdzJ/RvC5UiZkBUyqlyAjcgVFqkctol9HMOqdNVMmLKZYV28v3juHcBi9oNguGYlf+WjshJQkslNCXdyATTW7GHYfg+MwqklUsrSCTlBzpzbkC9TbSlYwqlZWzWYZj+2m+gylUG1uvXrAYyRInTFysO8tlGhUpSZlaKIUWYC9+USeh0xQxOSccxbKPAUIbziPMmyFNOP2c0Kq9EEuHCkpqny3EATgZqZQxicwZY0onYnZ7ecGQHTIefXrLNgBlDfp7z0GYlg5V2WIr4HTe9vharnTpS5apH2iRLOYptcP2SD3S5pvA5HGZWIQgzQUqLKCSSkKJNCDQKD0+qQuO8SQpJZPeo3hTw+hGUtJlbLYj7f3KmQk5TtJ3DmmkIlqzhNHOjsWJDORT0ixkSJWZUpSHKUhTrGZ8z916lm8rRzo/w9MqSlCWokV/MTUmkLEYf7VC1oKloNFCiEpVQkkvmKQDTn6KZgXNttbSKjMALaWtDTOASFCoBGUDQANrQCpfzrGTxHBFS8QXSnqmUpyaBLVIA+8CzjV9Hjcy8QkuznXyoxBtFJ0rkqXK7KmUFZw9iBdJbRvhBYbEVM4UnfSMo/yCnaY3H4da1pKzLlkg5VMEOGYCjEAhmzPQwLhHSNYQJBLIcgHK5TyOhFb3g+Lxc2aSMoAQMzCoSGBNRp2U+FNQYZ0e4UhcwmazFJIP5mGUVbn7RtnKU/yD2g1w4Y5dB1H9wycF1szOfBykbUoPMUi0PBciQSABRqXGjRYcJmAIALEFRy5QTc67W1h3F8WeqyBILl3zEKA2AYhoy2ruz5RoI0Nb+OvfeYrjOBlEKdgwo7X0H1aMbj8AUEsC3wj0idgJcxTlK1ZbuARmI9T8BSM5xhIzkMLi7/LS0a+ExBHl3lbFUFqa7GUnAeKJlnq5j9UogkiplrHdmoG41GocR7ClLBFUnsIYpqkjKGIrZrR4lxHC5S4HZPoPON3/ALOeO50HDTD2kAqlHUoFVo8u8OWaOjwWICmx2P3nLeJYYsMw3X6ibU7fXlT6eGL3joVv9U/tHH9Pr68o2bTCBirz9oUcznf3/aFEQ8086lSy5FL12hq5ZDtuP2jiJtq3+r6QNU/VxeIuLRtjeCmKGh1NPSATJlPOOzZw239wIiTJnI7whntLCJOTpkSeCyHUVmyLfzG3pfyitWuL+Qnq5SE6kZleJt7NGdjKxCG25mjhqYLC+0KhQqohwBSrdq/sKxtOi3Rk5BOnF1HtIRcJeuZW5sWsPGMp0VwyZ+KloV3UkrNNqj3yvyj0ufxES09kLWnM3ZGcjUkAejU1PjyfiFV1tTTf90m9TAAzNIakzpc0JEtS0qJIWFOLhwqjBwCP0iwxClyxWZmVVYdswTmNABSlB5Rzh0pQUicZisgcgKpmKgQCtJawUwHOOTpktYSkpmEJBIVRlED6OlhGS1mt9f0xtM5XudRMb0jw3WylTjLCVqUQQArNlfvsLDQ+L607xHiOTCpwqO8WUrwBcX1JY7+saHi3D0GTMYANLLMXZBD1JsMsecy2XMOZS+yCcwqRs3IgikauGIrKL6ZTGuxJBXW+kKrHrQnJNDgAgE5iUiwyAqysGoBB8Rw9UqaCoqZExIL1DMku4pYvDFyesyy1KSey4JfPkAqnnqADX2aFhElKiFAgTBlr2iFUykB9w28X7AjSJdXVsmbv23nsOGzhIUhYVmYuR2QKaAweYlhlVY7gtUbaCM90T44magyFkdagMo1qAOdaGh2MWsgqlgBZCgeVh4jR9fGOZrUnRiG3EcV10/e8cMJ1aHCx1aXy62BLO75WbSkQcdj0dV1lcrgHNRjXMCLj6rZ5OLmZMpEwBCAoWBvUvXcO9T4RkOM8SKhMUkLIUBVglOYKYczQu1w4MWcPRFRwdfXvPLdDfSw+0Dg1pUqapk9S4SWLd9wnWoBatbawYy0oUkKmBUzNlAS7EMktW1CDSKHh6c04BJZlAgAnvPQJtcnVqGLeeqXOxCOyoTFFywdgA4IuNF3FH0jXdL+WHnzICT6k/e01GCwZXLImSwyi3JgaE89Yg8WQUFzZI0D8hSFL42tREpCS4BJAOjhjXU0pzubwf/GFzFKSlLFNDWl2Z4xzTqq5JGkOmjJz7XMi46SOqzglKlJqNSWo+xYe8YnHlOdKUkEpDEE1e78r/GNhxvHFIVnyJY2CfHU309Yy83COOudKcwBYNQFmbUqIejPGlggQLtzlaq2VlTnr01/ErMXVJSpNwW+uUUmCxS5E1MxBZctQUDzB15GNHMkBbu7ixIYkGzjyjP8AFJZCnb63jXoNylLFU9M09nk4pE2XLmo7kxIUNWBuPIhSfKCo+Xy/Uxjf9nPEs0iZIJcylZ0/yL7Kh5Ky/wBRjXhbV8NRHT4epxKQPOcbiaXCrFeW/tDZk7+4/wDKFA+tTz9oUNsYrMs8nWm17NrpAsg5+rw8qoL2HhA1n4xVaaAgiOUCUeUPUr5wNR+MIYxwncFh+smIR+JQHk9faLzGTApRUSw+WkQ+jSXnE/hlrNdCRlH/AFRc4PA55gSoAiqix+6OdhVhXeMzGOAdeQmng6RfQc5N6LSuqxEsaLQQVAEgZnYKIuKD1j1DDygiW6akVOVIDlh93mByjx5eFSwcEKCsrFwpBBoQSKevwjd8F6VGdK6tkieAQHLJUWooECxID845rxGkzgOvv+ZuPRI25faXM/BpnKllR7LBQQUkKenaY2IzAWhh4QkITlWkJJfKAxRlL0Is5Y/VZGJdQCgAFtQ1YFmNtKu1rbRX9J8cZMkgFlZWe1SLxmU2e+VT2H5gCnmIBG8jcWVLRKmIzDP1ShnUySSAWBLM5ckAc483OKVKWmalwXDpNjux9Y0aOK5wEKGZJKRQntKDEJKrsVBL1eJmL6JTFS1TFrQAA5zrBNAKO3j7RsUMtAZX5yzUoBTYH8SBwdeHxE6WqYQlJUAUAOxNHNKVr7gRN41Pw2JxCcNJASlAKUL1XMqzqZyLgbxmuH4TM6UpAJLZszU01FIlf4fPRNChLzUcFubumn04h9lD3v6SstJk1JzX97XMZKwhlzAlaupL0UXFyRmBeov7xY8KxuKmiYkzmysOsVzZmYO7ctYLO6RBUgoXJAW32a2DpLuoPeqcwbnpFbw3Cy1zglMx05UqVU9osHGVWxLeUR/JSXXX5xyUszgXPex0+UXGMRikFIJUpBZuyRn1LvVTEt5RPwPSyQxlT5KTK2Z1CgfKRUEfpBOL4qTNMxKerSZcsCtApQcHKkBipiK7h4l8O4DMmSpcyYcyyz5gP8q4rfMX9GGkBUakqAuLdLaQ6xYAgD5ykm8CCnmSc6UkkoehCbgODWmtIDM4vM62WtaS8tOQ5U3TuTrU6xrpnCZgQoZsktIbKnKxoGKTkB7znWpVakF4fwlSkJKpctJJBUAHJGoKtVGvKsJOMUC7G/KLosRa4tzJ0sZSKx0hU4TEElBTXKWOcuzhQowFPK0L/D051OpRT2Fh9VEg5VAmuhYGvtHOJ4GU6yhSpa5ZbKUq7qic1qFIcGn5oh9f1yEqM0oXLFRlSxUO7o9Qwrq+kPUgqGGkuGzqbC8bipK1LC5+bqyTUqZq32AvaBrTJSAPvlIU4HZLuVMCNcyWAs3OgeKTFleRSQSk5VAPkykEOzntOTUP4R2Zh+0yi/4C5oxFtLF25eMNC25zKqFuKahBy7d9/tD4/h6pKElQDTHYu5ozv7epjL8Sk5nqn60+cXeL4kVIyKXRLs9yVFyWNdh4PFLjpgdg6ty3gzcobh8w33jauWogI2hf9n+J6vGS0qLJmPLV/qHZPkoJPlHomCxqZq5iEueqKgdQwOV70SW1jyVM/q5yVpplUlXmCDpGp43i5mHxqpslWRQXmQRqCLEWKTVxYvHVeF+cMvoROYxmFWoRfcTf9SvnCil/9UE//Ak/1GFF/LW/1+o/MofAd556Vv8A3T+sMUknTXSDqwKAHUogNy/SIn8Iopz5CEbwHAU8pfFJIuqX+E67fOAzEkXKfV/hFrKwyFJof+b4xEnYJgSIB8KgF4QVbyx6JI/z1GuVKB45lD9Inz1l86UsBRgSHBZ0nxaI3RRBIxSRdpR9FfvFtKws0/ZhQZY7r9knRyaCOZxhALXmpgFJqLbrDE9ZlQlRyoqkHvBSlJJCiXJ7QYVsBAcRhpecoVLXLmFlJcOwAqkJvmoCPE7vEgTpSJJlLGWchYKCk0VWvaFKM4PIRNlcPOImvMX1gQal6KUb2c0oHGgDiMgvk8xOk6HIFzDv8vSRMTKxEpREuZNUhJAdjejsa0tetYjcRmzEgmaZnWZkr7aSLBw9AMvaJpdxHociUlILJSSokksACaB2HID0ER8bhZc4POQGFBViBSzRQGPXPfLp7Xi/5AK2tv0Tz3DFMyUxJdS3UE2TloFudKnXWJuIwXWTkSpZm5VJzHMp2vVFT4b3iTxro/1A67DrJSXC0gVSk63D1f2e8E6GTpa56sgUCAkAWt3qfzHT94vvUHCNRPbtBauikJ+ntLvB8JlJl5US0pVqVAuRYkl68nI1izmJyJ7IDMCkPTb0LGHTMgdg6mLhg7jS+9Ktfzhk7DEqzJIDJyvQgAsWb7wo97pEYjOWPnis5J3kLEcMkzwUqSETD99AZizA5XqH86RkZ8heCxCUzEIOoJSFIUN0kkitRyrGpxUlQmJzPlfKVJIZm1erPSjt4Q/pXI6zBZsrmXMQqlCEksR6HWLuFrZWCE6H6RiuwO15keKhOeQlEvMtQSNAFIHdzEEkEB0k7Aagx6Nhpv2aczBbVAqA4Fm0pHnWJmZFSFMoS5auy5cpRQOezWjm5a2kbLg04TEoKUslgKkFQHM6hmpQ77QXiS3VTy6xSM7k59CCdPTmJZhJQTmCOrAAQz0fWlmLb6w2TLLKd8xAF/uiwHNjeG8QmzUlMuTKSSonMpZ7KA12uXJdhBMbKBBQ7PfKcpCTZvg8ZRvlGuh/dZ4Pe4AlJipSupKSpKcg7Sj2aXYkKuxDnm/KM7gJ2HlqUZqFZ7oKSAlmBFCavzpG14ph0rQsEp0ooEi3wJHrHn+JmK62aUhKwlRZBDqygBiaOQ29KHW+rhL1VOvy0lqgVHlGgk3jSZSpbgKQyQpspysokkvo2mlPMhPCUiSiakqmK6vPlUHDOXAPgaXq1ojcQLIUpBUQt3egJbtBKbfe94sMb0mBlCXLS5BlkUKQAlsyQfEN4E+EXCXGXKL66xGJQk2HUW9fxKbGygoJUUuoioKaJAdy1S9ASQBSKWfKUl5nlXXQN5RbY/iqpq1KUAh3BQmgbQAjemmkRsfLAAUk7EjyIca84t0yRbNvFVQTqNvrf8TMYpNfGsaTpHNzTEHUy5b/ANCT84zmIU5vag8Iu+OHtI/4Ur/6kGOm8H/+p9P+iYWIHm0kXreUKBecKOhlfKYCbPWq6vQCGdYv8avWDdXCVKjnC9X/AGPzMVxIIYmb+NfqYX8ZN/F7Q4ovDVJvA56n+x+ckNNB0IxREyf+IywaflWl/YvGjwOJmpmInd6WhfcJuSk1A3AjIdE1Nikp/wDcC5fmtJCf+ZovVTl5JgSSCwILs1QD6gt4Exk4tM1weYmpgnsynvJ3G56cZPSoJHbUBtqzMK8njRcDkqkqQgDs1eujM4puAPOKCUsCTL7BExDLSxoQ9QQEuFElxb4RrcPjRldKAXQk9s5Tza+3zjncWWyBRqNROlq09LW6bSeAlJKaNWr68tIr8bi1JdOUKQe9UUI1D61ZhEaZiEKmFSy/VdpIfQgjMBrdv7xOlpTMSrKyAbE0JcUIF6MLxQCZCGMQBqb8jMvP4kTmKVEpzMoGoCWNwWuP72gXQopE+YhJyKIdCqggg6Veyudou8R0YC0FImpKiQSrq7sCKl2uQfERQ43o7OwpE0ATMinStBNB+YXFAfONOnUospRW1P3izd2Gg9egmqmyZiASogjMWWBXtVOfVyoqhy8EFyyFy+sULAqIBPjo1fWBcK4tKmJK5bZlVUkmnWEag2FBEriiVrlLTJIBIDMWrcBxURnPnFQA6HrPMpWmVy9T66yInAzM3WLWymZSA5SRVmfW1dYXF5yRhpyVEsQkBjVwXBbVho/jSO4jip7TjKQkOaZATo92dmimxOOTPPVpRmqQkFj21DLnD1YK5UD2MPo0nLhjtBWwptra3fna8z+AxGdQlHRIdKyKmlHZgnXSmsaTgXEVSnw4SkrK+wTcuN8rUY+IjNcV4KuVNKOrJd8rhioULgGp/do5hp8yUtM1iySANmKWuXrQt4co1K1FXW307z1NwVzNbuf6nqWPCyjsmtCct6NbQVDRV4ue5DLyjOnMRdiWKSNLxhsLxqcE5gp2UQErAJCbsNQk25aRY42bNMtMx5IzAlmJUKl7uzsTW7RnDAMpsSI+mqkHp6Wlz0l4r1ZSgEqKiCxYgprQcrXiEOGLnETsSsJoyasE7AmlKvTVojdFpSp61TJqSoS6AsSSTpzrGxTIVZbG2UBNlV0DvRvSId/h/wDGm/P+oXFVVFheUWH4Al8gWUgDMyzmBII7KXSzknXneKziPCss0lXYQaPQ5aalhQGngI0GUziADQLIUCGdLe/1zgvEpaVghRYAMXpXd9w0QMU6kKfeL4gqMbjbQHp3E87xWFSJpBcA0Ymu4J0t8YrcYAAMqrO31Z4veOFImHOwJDu3eIDOX1NPcxnuJJDqDANt7NW0bdE5rGLrKVTvKeep1nxb5Rd9IB9qRsEJ/pQlPyiq4XJ6ydLTusP4PX2i8kcNm4uYVJBSgkkrUC1T90XVfTzaOl8M0Yntac3XqKvmYyjeFG8/3Rkbq/q//MKNi4lL4+lMflhLHygpt4iBqTGURE3gFpvDFi8Gyw0phZEYDAS5pQsLF0kEeIrHpmGwqJk4HMEomjMDfsrDgEbAlvKPMVi8a7gmLK8MGPakKyn/AIanKD4BWYeYihi6dxeX8JUytLjjkiUEidLWtlrYB3Yp7z2o+mlIHw/i+RZM5MyYFPUdogEVIe7e0ExWGSvDdZLUc2d5iXcKcAZwPxXduZ0iL0ZnyQJ4nJUoMyGJcEg1DEMXJrzMYb0sgObX/wBnTfGZ6V031ljwQdapayp5MtTJUzZiA+Yg7Bn5xqZcoghqvWwDtuG1rakQOjeFl/wyEliMrl6u6qkjntzi4VNQlGZRATuS1XZ7gVjDxVXNUIUc7WkCocoLG56yP/CzAU9WUpTmdaWclL1SlqB22ieAEuoJdxUb7Ag6X94arEIyJbPmKgDlJUGNiwsPbWIONnr6xKAQQtLNmLqZsxZNQzio30hIVmIEEHMbkzM9K8BKBM2UTLmkjMygMpLk5t3dLXoDFVicXi5KUzOsCkLS4IAIGhB2VRjT4xadJ5ISlX4wZYVu4CqHcg19YrOHy5sxC5SVAy1spYbukMQoHkQPWNyiymnepr6ywaT2up9oLBDrkECcTMUe2gqZzQgAUBIL38odgUTpM1faKZkokFL3llJLApJIUSGsbioat7gejkkHMsZtdgA7uw8/CLWRw6SiYFZQli4UGdnqDuKawpsdTBIAuPSK4Ry+bfpyPrM3xzjyJypYyKSUAhDl1ZmFFFnAcekcOKUcOnDpCUl1dZ2aqq6HVV2B051rFt036KLJ/iZaQZbfaswy3dQHgwLWNRyrsJIWUS5iShXVrCVDIVJ+8rMUahhlO4A2eLHEBQFTvPUlpL5reUcuhlKlS0qSj7MEF3UzEP8Ae3AfxrF1hcRM68S55QmWpOfKkpKQwYZanKWJpzMV3FEZ5hUjIETCR2BRqOAC7BzvWK7+GSlSQtJWNBqToHOnmL3ggA413tC4iimXH8T00M9G6NplZVmUxl515Waz0oNGtFpicWE5Axd+ywqeR3bTyjzzo1jlSpyUqJRKclQBcAswCvyuR+rx6ApROYZELSUjKoEhY3IFQb2YWuYyMTRKVSSdDrE8RXOYajaPlhOUkJL3GlTqTrSn9oo+OYtKcuZLuRlo7KFHFKNSJ2J4j1Sc3V5kgEFyXFLpa5EZwdIOsT3c2g3dhq5BfxhdCizee14zhvew5895QdJViYQsFQUmgcVJJqK6DeMri5hCS9zTy5cmeLzjuKKluxZPvu/L9Yz3EZuZTbftHTYVLKBKmNe11vLLodhc89yKJHxp8HPlHoqV7Hbwax+A9Yy/RDBiXKzquovZ/A+XzjRS96+4jq8DSy0rnnrOI8QrZ6uUbDSPznb4fpCh3WfmP9H7QouX7Sll7zzg2hqoKoltYEsRnmagjP1hii3rD6+8MV84WYYkZUWHR/iAkzgV/wCUsZJo/ISKjmkgKHhEJQgZhLLcWMsK1jcTcSEGXMVIWaE5aGhejg/hUku4uCIrMfh1SJqgwrUG6VXDg+Ljyg/BMX18nIT9vIT2a1XIGnNUv/pP5YseITV4iSwSCUkF6JIVlZYFauwYXJy+eRWp2NjNjCVRz2MvehmKUZSUqckAJZmGV6EHUVrXfaLjjHC0zpQSoBwpxU3uksDW+8Yzh/XSyiZhysgoyFBDsr7wypq2ZyHAv5xbyuITEIHWZ81QXOm4cAmnu+0c7iMO4q8RDNlkv5WHL19vWWfCZXUy1VKUgsoqILpABcUpX0D7wVaurAWlR7J7KlEkuSzq3DkCvKMZKxU3OlAX2JirLICMxNlZtA7m1IPxlKpKpgHeKsqkrAcFRBBQ5qCRdgbX0Z8GzNmLSmldU0I5266QWJxy5k7q1qDqUHULUDAnctSLPgQ7IICUjOVlTZsyWHYSdEgAFy9TEXF8J6tMuVRcyhmZA6sq1EgMdRUXFwKPS+w/DUIlgEFILjKaMDu2prTlB16iqnl2MuXd/Mwy2JsOvTaTuGzyoZkgsVGhYMxIdvJ4BjVhIzuza8iRRt3iThimWQnP2SXBJ0AS/sPcxCxkwkuggZrBVK0tyjKAu9+U9TJv3mi4M0+XNkqJyzEFOhAcEEhxdj7CMKOjSpCglSjnBV3SwDE91/ug63rGt4Qr7ZIq4IonZ4h9IJGHl4grWpYMwlIS5yGt2Fu8fURZo1mC5RFVDw3PQ6+nKQJqZQJR1aMrlKiEsQprkiovAekHBELQkpyomMwcnKthQktQmgrStTFjMwRlEmUAk1IKq1JuoGraeUTOIYYrGdS0dgOMvZJoQ2Ynu5jEJiMrAg6SxUZWUXG41P8AyYDhInJW0uVNBT2ZhQM1LqBSKMb/AN4nnjU2SlIlqJQSogEWTmokcmamlIUmfiZOIWtKlBThwtOYKQeyFHLRwS2mkE4tiEozylpzk1DvRRcuNXckc/ONJyGIBF769ZGHopZuh0+UhL44kpWErSczkZ8zgnlUa87CKdGLUxQEpVUF60bVrF3ghwqcpAHbJfMK0Y0Yav8ACK2eGQpZXsG119P1ixSpINpL12F8wsB9e8jcVxhqXclw49/HxiJwvCGbMCedfCI05ZUr2A5RuOivCFS5UyYUGye1o5ILf0/GNrC4fOwX5zmcfisqs/yllKRlAAo1KfH4QZ9/MfXnA1IYVt9aQ5APjf6ppHT2AFhOR1JuY9l7GFDm/Ofr/TCgYcx/8KGDkV5ww4UHUb+0OXp4RyWPhFIgS7mMD1A3H15wNaEjWDzDEdQgGENSYJSEwIgQfLAymFERgaLD4lUtaZiCUrSQUkXBEbTBYlE5HXSxlYjrZY+4vQgH7ijVJ0t44rLBsDjFyZgmSyxsQbKTqlQ1SdorV6HEHeWqFfIe02nDeLqkzEHrTLBZCtzLBzd67ircvCtzjFlS1TUKXOld1JmlORLksFgmiQpRDjYVEUUmfKxMsmUlILfaJV2ih9n7ydleRYwlqRIlJCSxKSgprmYl87ggGv3VA6V0jDr4ci9h7TocNiEZlLfPrpbX0lV1QmzierUEiqsnay8wAK0CmHIVi8UnCLnISZysiBmUoMoqNCnKQHszvYgxB4PjFSJhKpYVnByE90n7qgTpmHxFI0M3h8tKlT5+G7E5GUFDHJMNQthQFw+gv5oci+Um2k0eApvYa/8Ae1953pmrDS5MtOHGacFBZmO6wli4Wu5ckMDZvCO8Dx/8ShJKilaKKQag30OhB0saRQY6SqUtQQkMo5TLZwTR8uXXMHYctBFQZipUzPJzoCa1IJD0OYMAxpppCTQ4lPKDryM9VU01AY6fW89NVhhrrTcByH+HvEbEYFJXc0HZAoxe/pGbwvTUj/MluaMUH/tU2ramJX+9JmEJEpQKiyaDSlGJKq/VIzvg8Qp2koddJsOGK6oKWUupIOUC6qWclr/GK9eIlrXnmy1Z0kKAIqCoO92YVHlFRwnjZmy1KSXKT3VPmBrlHZ3IFtzFzjEoVJQZmbKCFkIcUZyCaECphLI1M5X68oistze+/wC/ePlIzpmTVq+zVlKSGcAUIL0ZxpuY4AZiTKm5CCk5sr9n8IJFnZ/F4ZN4iiVIlES8yVAAS0OpYSz91QdTJq3IxCx/GzJQoABS8tVBTBQcnMNmdIbWtdpWk5O3PT2tPUlLLbfnIuIllAUpRSapSFJbOVulGZfarYDyBir6SoQnEJSnOCrKFlRrbtZT7eIMPElcyWsDOtQAUyXVRwonckLBqLhR2is48tJlpmqUOsUruJuLnNm87co1aCHNv2+0uWFNLnl+3hJ3FZuDQUtLWgg5VfeqCwJYubhuUYnH4ozFFQoDoPjHcVPKzem31rEzB8OUlPWKHZcAPZ3F/wBI2MNhrHyjzHeYWNxt9SdIfgPCSohRCrEpYbM58e0PKNrhDNCJoJJSUSswLOhaSlKfUfKK/gs9JyZ8wCUrSCPzzCpLHyF9os8JMeZiZbh2lpB3yIzM1B9w+sdJhqK0wOs5HFV3qsTy6SNmJ18PGDhKmLW9P32gSTsfr1gpVz35eEXjKKmP6xP4VQodnTt7GFEQrzErWmnaHqISpqa9oesGUtNsunIQQkCyXrFOxly4kLrU7/GBlaW19IllRszeECVAkGSCIDrANFeg/WAlX5VRKUiBLELKmMDCBU/4fcQMn8vvEhoapMAVhhhByJ8yUoLlnKoWIPqLVHIxeScejEEZyJU3UE/Zq/lJ7p/KabHSKJYgKkwirQV95Zo1ym02HE8VMMsSCmiGyXBQOQdmPhDpPEZiQhPWK7AUopJYBhcEG9TRozmC4vMlgJP2iBZKrgflVdPhUcos8NipExT5spN0rp6K7p9jyjJr4PtcTcwniTJsfY7TU8bVKmS5b5VLSnrFGWQAPypcgMXzMzuKXAisHD5ZkhPWqAUskWcpKQ7nYFCPXyiBj5qxQOkFOQaDJsORJJiGxUUpK2CauXYClmq/KKfAZVABlz4unVqA1Bp0vpvvJ8/hZkTEpK3TMSVAguQoEhzsXDxa4qRNVLRKU4QDmDggZ+1lrr3izNc0esV3FsY837NWVkgJJJJIIuXDDwFoNiOM4hSAFrlrSgpOU0JbTMkOPUQtkrG23eaKY3DL5eV/20HOlS0DNKmGVNCVAs/bL1Sa2I3Avyi96PccmKlpliWmYoFu8ASdWCgzm7vcmM9hOkMhannSirKkBIBSH7xU5SzVL6mK6dxQiZmkgoSO6Cp28WAeIfDmquVxqJVq1sOKmZTpNFxjjBWUlaVpAJbKRmFCKgUevtESbOZKVhKiF9nOqrpHfA0FQHGkZ3GYuYs3I8Pi4EAlBZBSCpiXIcsTzFiYbTwgChREPjlpuSg9zNKrpMJReU6SzMGbY1BpYb3eMzi1rmrKjUmvh+0WuE6OTVDMRlTzp7X9h4x1eDy5QA+a2ziNXC+FMPNaw6neZOM8cWobXuRyG3uZWy8GUMQl1bkUHgN+cWycfOUjqyhBTRIaXUB3oX0+cT8JJSoJSQWzM7hidTysfeLKRwpISpw1FHd3cAjlSN2lhVpjymc3WxjVD5hKXh8wyyoALCXBrKzDvuBelotuEnKsrMxLKWCQULSXUrI1Ul++decKdwrI5BZ2q7UsNd2g+KwBKZYM2omoJBrZXLwEMy2EVxATBJ+vBqQ+h13+vjAhvy+vhHT9eEWiJWBjnGyvT94UNp+b0/aFEW7wvaZxEqogyBlPkPOAIxkujZj5H5wji0u7L9NPWKmZest5X6Q65b1feI02SRaHKxY/DM9B+scE817CmPh+sCXWTw36QKkMawwopBVFR+57/tDerXsPUwBYQwjQCBWFMFYMJSvy+n7x0ySak+0BeHlN5EWmAlEWCpHP4RwyRAmGLyvKYYpMWCpQgZlCAMMXkaTiZkvuLIG2n9JpEqTxUu8yWlQ3T2FfNPtA1SxDeqhTUkbcRq1XXYzXcDwUjEAqlzC4DqQofaAeFin8wpu0P4oJSZSurBBGp2fSMnhgpCgtCilSS4UksQeREaCZxJM6UtMxIRObvJDIWfzJHcX4dk/lipUwzLquolpMQG0YzIPUxJlFg6iw0GpgsjAtU302gxwRNYOlg2fVhpBq4tV0WME18rZQ7O7EjxJ+TRrsHhpKZiFJMtgDUrTelyS9YzMrhbxOk8HRq30Y1KFIUv4qJl4hzW3YzXYtcoSzlmSypSQCMyRs+tw8Z3i8oiaEIUkgpSAQbPer8vp44jh6B9wHyji8LL/APSLV2I1lRaSqdDKrFkpUEj7tB4/Xxi/4VjlKlGozISBo7b+UUmLwKSSQG8IiSETpZeWtSfrnCczK20sGkrrvNqhWdFdW0qA4etniTPShkqGZ8sw6s4ACfcxjVYvFK+/7Cvjzi6wM6bkIWQXHmA4LO+6R7w5WL8pWalk1uJIf6+EOWr2+tIGKaQ4JMWIgRmXxhQ/IdoUTIuJQIAbS0ICFKNI6RFGaU5DwoNDG+vrwjhMCRCBnCqsIwhHWgTCEbCJjscIiJ6cMDUIJDVCIMIQChDCmDFMFTh4Xa8LaRCiOy5UTxh4KmSIILBLSIiRBRKiVLlfX15wQyoeBEkmRUSYPLkiCJRt9fTQ5PhBiCRCIQOfmFfIQRKtP0/vt6iABXI/XhDyom5fxr8fqkHeAFhVDf63gRjh+X1844I8JJjVJB2hdUP3/ALQ4JtCKvry1ggIJMclAGnxh4mtAkfXvHQPrzr+kNAiGMkdYdh5+8dM2AAwKfNb0+vnBWtA1Mk/xA29v3hRUfxMKBzCTkaKTaODXy+BhQoqnYS6Ipmnn8o4PkfhChQBjBvOIv6Q4fMwoUAd4Q2jdRHDaFCiJ6cR8oYf0hQogyRHb/WsSkfXpChRA3hGPX+sFkW9IUKGLtFGdVCTcQoUNEBo1P16JjitPreFCiBPGFw/d9fnDTr5/9IhQoKRCyu6P9PwjqrHy+MKFBCAYz9P+0Q06efxhQoYIBjt/P5Q43H1rChQwRR3jZtkxDxFjChRL7QU3lZChQorS3P/Z'),
    new Recipe('A test recipe', 'This is surely a test', '')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
